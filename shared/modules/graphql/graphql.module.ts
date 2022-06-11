import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache, Operation, split, UriFunction} from '@apollo/client/core';
import {paramCase} from 'change-case';
import {BrowserModule, TransferState} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IsBrowserService} from '#shared/services/is-browser.service';
import {LocalstorageService} from '#shared/services/local-storage.service';
import {setContext} from '@apollo/client/link/context';
import {withScalars} from 'apollo-link-scalars';
import {ENVIRONMENT, Environment} from '#shared/environment';
import introspectionResult from '#shared/graphql.schema.json';
import {resolvers as typesMap} from 'graphql-scalars';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';
import {createPersistedQueryLink} from 'apollo-angular/persisted-queries';
import {usePregeneratedHashes} from 'graphql-codegen-persisted-query-ids/lib/apollo';
import {createUploadLink} from 'apollo-upload-client';
import {buildClientSchema, OperationDefinitionNode} from 'graphql';
import hashes from '#shared/graphql.client.json';
import {onError} from '@apollo/client/link/error';
import {Router} from '@angular/router';
import {TokenService} from '#shared/services/token.service';


const uri = '//localhost:3200/graphql';
// @ts-ignore
export const schema = buildClientSchema(introspectionResult);
export const APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');

function getAccessToken(localStorage: LocalstorageService): string | null {
  return localStorage.getItem('accessToken');
}

function createApollo<TCacheShape>(
  env: Environment,
  config: GraphQlConfig,
  cache: InMemoryCache,
  transferState: TransferState,
  localStorage: LocalstorageService,
  isBrowserService: IsBrowserService,
  tokenService: TokenService,
  router: Router,
): ApolloClientOptions<TCacheShape> {

  const loginPageUri = ['/auth/sign-in'];
  const isBrowser = isBrowserService.isBrowser();

  function getHeaders() {
    const headers: Record<string, string> = {};
    const token = getAccessToken(localStorage);
    if (token) {
      headers.Authorization = 'JWT ' + token;
    }
    return headers;
  }

  const auth = setContext((operation, context) => ({
    headers: {...context.headers, ...getHeaders()},
  }));

  const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({message}) => {
        if (message === 'Not authorized') {
          tokenService.removeTokens();
          router.navigate(loginPageUri).then();
        }
      });
    }

    if (networkError) {
      tokenService.removeTokens();
      router.navigate(loginPageUri).then();
    }
  });

  const http = ApolloLink.from([withScalars({schema, typesMap}), auth, errorLink, createUploadLink(config)]);

  let link = http;
  // let link = isBrowser ? browserLink(config, isBrowser, http, localStorage) : http;

  if (env.production) {
    link = createPersistedQueryLink({
      useGETForHashedQueries: true,
      generateHash: usePregeneratedHashes(hashes),
    }).concat(link);
  }

  const options: ApolloClientOptions<TCacheShape> = {
    link,
    // @ts-ignore
    cache,
    assumeImmutableResults: true,
  };
  if (isBrowser) {
    options.ssrForceFetchDelay = 100;
  } else {
    options.ssrMode = true;
  }

  return options;
}

function browserLink(config: GraphQlConfig, isBrowser: boolean, http: ApolloLink, localStorage: LocalstorageService) {

  const ws = new WebSocketLink({
    uri: getWSUri(config, isBrowser),
    options: {
      reconnect: true,
      connectionParams: {
        authToken: getAccessToken(localStorage),
      },
    },
  });

  return split(
    ({query}) => {
      const {kind, operation} = getMainDefinition(query) as OperationDefinitionNode;
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    ws,
    http,
  );
}

function getWSUri(config: GraphQlConfig, isBrowser: boolean): string {
  if (!isBrowser) return '';

  const wsOperation: Operation = {
    operationName: 'subscribe',
    getContext: () => ({}),
    setContext: context => void 0,
    query: null,
    extensions: {},
    variables: {},
  };
  const uri = new URL(
    config.uri instanceof Function ? config.uri(wsOperation) : config.uri,
    `${location.protocol}//${location.host}`,
  );
  uri.protocol = (uri.protocol || location.protocol) === 'https:' ? 'wss' : 'ws';
  uri.host = uri.host || location.host;
  return uri.href;
}

export class GraphQlConfig {
  useGETForQueries?: boolean;
  uri?: string | UriFunction;
}

const defaultConfig: GraphQlConfig = {
  useGETForQueries: false,
  uri: operation => `${uri}/${paramCase(operation.operationName)}`,
};

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  exports: [HttpClientModule],
  providers: [
    // @ts-ignore
    {provide: APOLLO_CACHE, useValue: new InMemoryCache({freezeResults: false})},
    {provide: TransferState},
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [ENVIRONMENT, GraphQlConfig, APOLLO_CACHE, TransferState, LocalstorageService, IsBrowserService, TokenService, Router],
    },
  ],
})

export class GraphQLModule {
  static forRoot(config: GraphQlConfig = {}): ModuleWithProviders<GraphQLModule> {
    config = Object.assign({}, defaultConfig, config);
    return {
      ngModule: GraphQLModule,
      providers: [
        {provide: GraphQlConfig, useValue: config},
      ],
    };
  }
}
