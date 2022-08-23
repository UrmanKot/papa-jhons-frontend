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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CreateProductInput = {
  carbs?: InputMaybe<Scalars['Int']>;
  category: Scalars['String'];
  count: Scalars['Int'];
  description: Scalars['String'];
  energyValue?: InputMaybe<Scalars['Int']>;
  greases?: InputMaybe<Scalars['Int']>;
  isAddNutritionalValue: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Int'];
  proteins?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
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
  user: UserNode;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginUserResponse;
  productCreate: ProductNode;
  productRemove: Scalars['Boolean'];
  register: UserNode;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationProductCreateArgs = {
  createProductInput: CreateProductInput;
  file?: InputMaybe<Scalars['Upload']>;
};


export type MutationProductRemoveArgs = {
  id: Scalars['String'];
};


export type MutationRegisterArgs = {
  createUserInput: CreateUserInput;
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export enum ProductCategoryType {
  Combobox = 'COMBOBOX',
  Dessert = 'DESSERT',
  Drinks = 'DRINKS',
  Hot = 'HOT',
  Pizza = 'PIZZA',
  Sauces = 'SAUCES',
  Snacks = 'SNACKS',
  Vegan = 'VEGAN'
}

export type ProductNode = {
  __typename?: 'ProductNode';
  /** Углеводы */
  carbs?: Maybe<Scalars['Int']>;
  category: ProductCategoryType;
  /** Количество */
  count?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  /** Энергетическая ценность */
  energyValue?: Maybe<Scalars['Int']>;
  /** Жиры */
  greases?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  idNumber: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  /** Добавить пищевую ценность? */
  isAddNutritionalValue: Scalars['Boolean'];
  name: Scalars['String'];
  /** Цена */
  price: Scalars['Int'];
  /** Белки */
  proteins?: Maybe<Scalars['Int']>;
  /** Цена по скидке */
  salePrice?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  /** Вес */
  weight?: Maybe<Scalars['Int']>;
};

export type ProductNodeConnection = {
  __typename?: 'ProductNodeConnection';
  edges: Array<ProductNodeEdge>;
  pageInfo: PageInfo;
};

export type ProductNodeEdge = {
  __typename?: 'ProductNodeEdge';
  cursor: Scalars['String'];
  node: ProductNode;
};

export type ProductNodeWhereInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCurrentUser: UserNode;
  product: ProductNode;
  products: Array<ProductNode>;
  products2: ProductNodeConnection;
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryProducts2Args = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrderByInput>;
  where?: InputMaybe<ProductNodeWhereInput>;
};

export enum RoleType {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Subscription = {
  __typename?: 'Subscription';
  productAdded: ProductNode;
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type UserNode = {
  __typename?: 'UserNode';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  idNumber: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isActivated: Scalars['Boolean'];
  lastName: Scalars['String'];
  role: RoleType;
  updatedAt: Scalars['DateTime'];
};

export type ProductsEditGetProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductsEditGetProductQuery = { __typename?: 'Query', object: { __typename?: 'ProductNode', id: string, name: string, description: string, category: ProductCategoryType, price: number, count?: number | null, isAddNutritionalValue: boolean, proteins?: number | null, greases?: number | null, carbs?: number | null, energyValue?: number | null, weight?: number | null, image?: string | null } };

export type Test2QueryVariables = Exact<{
  where?: InputMaybe<ProductNodeWhereInput>;
}>;


export type Test2Query = { __typename?: 'Query', products2: { __typename?: 'ProductNodeConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null }, edges: Array<{ __typename?: 'ProductNodeEdge', cursor: string, node: { __typename?: 'ProductNode', id: string, name: string, description: string, category: ProductCategoryType, price: number, count?: number | null, isAddNutritionalValue: boolean, proteins?: number | null, greases?: number | null, carbs?: number | null, energyValue?: number | null, weight?: number | null, image?: string | null } }> } };

export type ProductsEditSaveProductMutationVariables = Exact<{
  file?: InputMaybe<Scalars['Upload']>;
  createProductInput: CreateProductInput;
}>;


export type ProductsEditSaveProductMutation = { __typename?: 'Mutation', object: { __typename?: 'ProductNode', id: string, name: string, description: string, category: ProductCategoryType, price: number, count?: number | null, isAddNutritionalValue: boolean, proteins?: number | null, greases?: number | null, carbs?: number | null, energyValue?: number | null, weight?: number | null, image?: string | null } };

export type ProductsEditProductFragment = { __typename?: 'ProductNode', id: string, name: string, description: string, category: ProductCategoryType, price: number, count?: number | null, isAddNutritionalValue: boolean, proteins?: number | null, greases?: number | null, carbs?: number | null, energyValue?: number | null, weight?: number | null, image?: string | null };

export type ProductsListLoadQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsListLoadQuery = { __typename?: 'Query', products: Array<{ __typename?: 'ProductNode', id: string, image?: string | null, category: ProductCategoryType, name: string, price: number, description: string }> };

export type ProductRemoveMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductRemoveMutation = { __typename?: 'Mutation', result: boolean };

export type TestSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TestSubscription = { __typename?: 'Subscription', product: { __typename?: 'ProductNode', id: string, image?: string | null, category: ProductCategoryType, name: string, price: number, description: string } };

export type ProductsListProductFragment = { __typename?: 'ProductNode', id: string, image?: string | null, category: ProductCategoryType, name: string, price: number, description: string };

export type AuthLogInMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type AuthLogInMutation = { __typename?: 'Mutation', result: { __typename?: 'LoginUserResponse', user: { __typename?: 'UserNode', id: string, email: string, isActivated: boolean, role: RoleType }, tokens: { __typename?: 'Tokens', accessToken: string, refreshToken: string } } };

export type AuthGetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthGetUserQuery = { __typename?: 'Query', user: { __typename?: 'UserNode', id: string, email: string, isActivated: boolean, role: RoleType } };

export type AuthUserFragment = { __typename?: 'UserNode', id: string, email: string, isActivated: boolean, role: RoleType };

export const ProductsEditProductFragmentDoc = gql`
    fragment ProductsEditProduct on ProductNode {
  id
  name
  description
  category
  price
  count
  isAddNutritionalValue
  proteins
  greases
  carbs
  energyValue
  weight
  image
}
    `;
export const ProductsListProductFragmentDoc = gql`
    fragment ProductsListProduct on ProductNode {
  id
  image
  category
  name
  price
  description
}
    `;
export const AuthUserFragmentDoc = gql`
    fragment AuthUser on UserNode {
  id
  email
  isActivated
  role
}
    `;
export const ProductsEditGetProductDocument = gql`
    query ProductsEditGetProduct($id: String!) {
  object: product(id: $id) {
    ...ProductsEditProduct
  }
}
    ${ProductsEditProductFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsEditGetProductGQL extends Apollo.Query<ProductsEditGetProductQuery, ProductsEditGetProductQueryVariables> {
    override document = ProductsEditGetProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Test2Document = gql`
    query test2($where: ProductNodeWhereInput) {
  products2(where: $where, orderBy: {createdAt: DESC}) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges {
      node {
        ...ProductsEditProduct
      }
      cursor
    }
  }
}
    ${ProductsEditProductFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class Test2GQL extends Apollo.Query<Test2Query, Test2QueryVariables> {
    override document = Test2Document;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProductsEditSaveProductDocument = gql`
    mutation ProductsEditSaveProduct($file: Upload, $createProductInput: CreateProductInput!) {
  object: productCreate(file: $file, createProductInput: $createProductInput) {
    ...ProductsEditProduct
  }
}
    ${ProductsEditProductFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsEditSaveProductGQL extends Apollo.Mutation<ProductsEditSaveProductMutation, ProductsEditSaveProductMutationVariables> {
    override document = ProductsEditSaveProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProductsListLoadDocument = gql`
    query productsListLoad {
  products {
    ...ProductsListProduct
  }
}
    ${ProductsListProductFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsListLoadGQL extends Apollo.Query<ProductsListLoadQuery, ProductsListLoadQueryVariables> {
    override document = ProductsListLoadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProductRemoveDocument = gql`
    mutation productRemove($id: String!) {
  result: productRemove(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductRemoveGQL extends Apollo.Mutation<ProductRemoveMutation, ProductRemoveMutationVariables> {
    override document = ProductRemoveDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TestDocument = gql`
    subscription test {
  product: productAdded {
    ...ProductsListProduct
  }
}
    ${ProductsListProductFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TestGQL extends Apollo.Subscription<TestSubscription, TestSubscriptionVariables> {
    override document = TestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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