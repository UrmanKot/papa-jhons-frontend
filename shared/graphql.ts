import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserResponse = {
  __typename?: 'LoginUserResponse';
  tokens: Tokens;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginUserResponse;
  register: User;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRegisterArgs = {
  createUserInput: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getCurrentUser: User;
};

export enum RoleEnum {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  idNumber: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isActivated: Scalars['Boolean'];
  lastName: Scalars['String'];
  role: RoleEnum;
  updatedAt: Scalars['DateTime'];
};

export type AuthLogInMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type AuthLogInMutation = { __typename?: 'Mutation', result: { __typename?: 'LoginUserResponse', user: { __typename?: 'User', id: string, email: string, isActivated: boolean, role: RoleEnum }, tokens: { __typename?: 'Tokens', accessToken: string, refreshToken: string } } };

export type AuthGetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthGetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, email: string, isActivated: boolean, role: RoleEnum } };

export type AuthUserFragment = { __typename?: 'User', id: string, email: string, isActivated: boolean, role: RoleEnum };

export const AuthUserFragmentDoc = gql`
    fragment AuthUser on User {
  id
  email
  isActivated
  role
}
    `;
export const AuthLogInDocument = gql`
    mutation AuthLogIn($loginUserInput: LoginUserInput!) {
  result: login(loginUserInput: $loginUserInput) {
    user {
      ...AuthUser
    }
    tokens {
      accessToken
      refreshToken
    }
  }
}
    ${AuthUserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthLogInGQL extends Apollo.Mutation<AuthLogInMutation, AuthLogInMutationVariables> {
    override document = AuthLogInDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AuthGetUserDocument = gql`
    query AuthGetUser {
  user: getCurrentUser {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthGetUserGQL extends Apollo.Query<AuthGetUserQuery, AuthGetUserQueryVariables> {
    override document = AuthGetUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }