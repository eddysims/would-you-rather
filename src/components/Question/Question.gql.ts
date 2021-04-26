import { gql } from "@apollo/client";

export const questionData = gql`
  fragment questionData on users {
    id
  }
`;

export const CREATE_QUESTION_MUTATION = gql`
  mutation createQuestion($uid: String!, $prefix: String!, $suffix: String!) {
    insert_question_one(
      object: { prefix: $prefix, suffix: $suffix, user_id: $uid }
    ) {
      id
    }
  }
`;
