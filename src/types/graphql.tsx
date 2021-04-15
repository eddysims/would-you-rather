import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "question" */
  delete_question?: Maybe<Question_Mutation_Response>;
  /** delete single row from the table: "question" */
  delete_question_by_pk?: Maybe<Question>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "question" */
  insert_question?: Maybe<Question_Mutation_Response>;
  /** insert a single row into the table: "question" */
  insert_question_one?: Maybe<Question>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "question" */
  update_question?: Maybe<Question_Mutation_Response>;
  /** update single row of the table: "question" */
  update_question_by_pk?: Maybe<Question>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_QuestionArgs = {
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Question_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_QuestionArgs = {
  objects: Array<Question_Insert_Input>;
  on_conflict?: Maybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_OneArgs = {
  object: Question_Insert_Input;
  on_conflict?: Maybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionArgs = {
  _inc?: Maybe<Question_Inc_Input>;
  _set?: Maybe<Question_Set_Input>;
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_By_PkArgs = {
  _inc?: Maybe<Question_Inc_Input>;
  _set?: Maybe<Question_Set_Input>;
  pk_columns: Question_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: Question_Aggregate;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootQuestionArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};


export type Query_RootQuestion_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};


export type Query_RootQuestion_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "question" */
export type Question = {
  __typename?: 'question';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  optionOne: Scalars['String'];
  optionTwo: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
  voteOne: Scalars['Int'];
  voteTwo: Scalars['Int'];
};

/** aggregated selection of "question" */
export type Question_Aggregate = {
  __typename?: 'question_aggregate';
  aggregate?: Maybe<Question_Aggregate_Fields>;
  nodes: Array<Question>;
};

/** aggregate fields of "question" */
export type Question_Aggregate_Fields = {
  __typename?: 'question_aggregate_fields';
  avg?: Maybe<Question_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Question_Max_Fields>;
  min?: Maybe<Question_Min_Fields>;
  stddev?: Maybe<Question_Stddev_Fields>;
  stddev_pop?: Maybe<Question_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Question_Stddev_Samp_Fields>;
  sum?: Maybe<Question_Sum_Fields>;
  var_pop?: Maybe<Question_Var_Pop_Fields>;
  var_samp?: Maybe<Question_Var_Samp_Fields>;
  variance?: Maybe<Question_Variance_Fields>;
};


/** aggregate fields of "question" */
export type Question_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Question_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Question_Avg_Fields = {
  __typename?: 'question_avg_fields';
  id?: Maybe<Scalars['Float']>;
  voteOne?: Maybe<Scalars['Float']>;
  voteTwo?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "question". All fields are combined with a logical 'AND'. */
export type Question_Bool_Exp = {
  _and?: Maybe<Array<Question_Bool_Exp>>;
  _not?: Maybe<Question_Bool_Exp>;
  _or?: Maybe<Array<Question_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  optionOne?: Maybe<String_Comparison_Exp>;
  optionTwo?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  voteOne?: Maybe<Int_Comparison_Exp>;
  voteTwo?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "question" */
export enum Question_Constraint {
  /** unique or primary key constraint */
  QuestionPkey = 'question_pkey'
}

/** input type for incrementing numeric columns in table "question" */
export type Question_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  voteOne?: Maybe<Scalars['Int']>;
  voteTwo?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "question" */
export type Question_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  optionOne?: Maybe<Scalars['String']>;
  optionTwo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  voteOne?: Maybe<Scalars['Int']>;
  voteTwo?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Question_Max_Fields = {
  __typename?: 'question_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  optionOne?: Maybe<Scalars['String']>;
  optionTwo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  voteOne?: Maybe<Scalars['Int']>;
  voteTwo?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Question_Min_Fields = {
  __typename?: 'question_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  optionOne?: Maybe<Scalars['String']>;
  optionTwo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  voteOne?: Maybe<Scalars['Int']>;
  voteTwo?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "question" */
export type Question_Mutation_Response = {
  __typename?: 'question_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Question>;
};

/** on conflict condition type for table "question" */
export type Question_On_Conflict = {
  constraint: Question_Constraint;
  update_columns: Array<Question_Update_Column>;
  where?: Maybe<Question_Bool_Exp>;
};

/** Ordering options when selecting data from "question". */
export type Question_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  optionOne?: Maybe<Order_By>;
  optionTwo?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  voteOne?: Maybe<Order_By>;
  voteTwo?: Maybe<Order_By>;
};

/** primary key columns input for table: question */
export type Question_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "question" */
export enum Question_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OptionOne = 'optionOne',
  /** column name */
  OptionTwo = 'optionTwo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VoteOne = 'voteOne',
  /** column name */
  VoteTwo = 'voteTwo'
}

/** input type for updating data in table "question" */
export type Question_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  optionOne?: Maybe<Scalars['String']>;
  optionTwo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  voteOne?: Maybe<Scalars['Int']>;
  voteTwo?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Question_Stddev_Fields = {
  __typename?: 'question_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  voteOne?: Maybe<Scalars['Float']>;
  voteTwo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Question_Stddev_Pop_Fields = {
  __typename?: 'question_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  voteOne?: Maybe<Scalars['Float']>;
  voteTwo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Question_Stddev_Samp_Fields = {
  __typename?: 'question_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  voteOne?: Maybe<Scalars['Float']>;
  voteTwo?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** update columns of table "question" */
export enum Question_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OptionOne = 'optionOne',
  /** column name */
  OptionTwo = 'optionTwo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VoteOne = 'voteOne',
  /** column name */
  VoteTwo = 'voteTwo'
}

/** aggregate var_pop on columns */
export type Question_Var_Pop_Fields = {
  __typename?: 'question_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  voteOne?: Maybe<Scalars['Float']>;
  voteTwo?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Question_Var_Samp_Fields = {
  __typename?: 'question_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  voteOne?: Maybe<Scalars['Float']>;
  voteTwo?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Question_Variance_Fields = {
  __typename?: 'question_variance_fields';
  id?: Maybe<Scalars['Float']>;
  voteOne?: Maybe<Scalars['Float']>;
  voteTwo?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: Question_Aggregate;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootQuestionArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};


export type Subscription_RootQuestion_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};


export type Subscription_RootQuestion_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['String'];
  /** The users name that they will be referenced by. */
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  avatarUrl?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  nickname?: Maybe<String_Comparison_Exp>;
  provider?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersNicknameKey = 'users_nickname_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUserIdKey = 'users_user_id_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  /** The users name that they will be referenced by. */
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  /** The users name that they will be referenced by. */
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  /** The users name that they will be referenced by. */
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatarUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nickname?: Maybe<Order_By>;
  provider?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Provider = 'provider',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  /** The users name that they will be referenced by. */
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Provider = 'provider',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate sum on columns */
export type Question_Sum_Fields = {
  __typename?: 'question_sum_fields';
  id?: Maybe<Scalars['Int']>;
  voteOne?: Maybe<Scalars['Int']>;
  voteTwo?: Maybe<Scalars['Int']>;
};

export type ProfileDataFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'id' | 'name' | 'provider' | 'nickname' | 'avatarUrl'>
);

export type UpdateUserProfileMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
}>;


export type UpdateUserProfileMutation = (
  { __typename?: 'mutation_root' }
  & { update_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & { returning: Array<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'name' | 'avatarUrl' | 'nickname' | 'provider'>
    )> }
  )> }
);

export type ProfileHeaderDataFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'avatarUrl' | 'name'>
);

export type AddUserMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
}>;


export type AddUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )> }
);

export const ProfileDataFragmentDoc = gql`
    fragment profileData on users {
  id
  name
  provider
  nickname
  avatarUrl
}
    `;
export const ProfileHeaderDataFragmentDoc = gql`
    fragment profileHeaderData on users {
  avatarUrl
  name
}
    `;
export const UpdateUserProfileDocument = gql`
    mutation updateUserProfile($id: String!, $name: String!, $nickname: String) {
  update_users(where: {id: {_eq: $id}}, _set: {name: $name, nickname: $nickname}) {
    returning {
      id
      name
      avatarUrl
      nickname
      provider
    }
  }
}
    `;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      nickname: // value for 'nickname'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const AddUserDocument = gql`
    mutation addUser($id: String!, $name: String!, $avatar: String, $provider: String!) {
  insert_users_one(
    object: {id: $id, name: $name, avatarUrl: $avatar, provider: $provider}
  ) {
    id
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      avatar: // value for 'avatar'
 *      provider: // value for 'provider'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    