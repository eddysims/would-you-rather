import { gql } from "@apollo/client";

export const ADD_USER_MUTATION = gql`
  mutation addUser(
    $id: String!
    $name: String!
    $avatar: String
    $provider: String!
  ) {
    insert_users_one(
      object: { id: $id, name: $name, avatarUrl: $avatar, provider: $provider }
    ) {
      id
    }
  }
`;
