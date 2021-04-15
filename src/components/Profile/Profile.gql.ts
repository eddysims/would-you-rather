import { gql } from "@apollo/client";

export const profileData = gql`
  fragment profileData on users {
    id
    name
    provider
    nickname
    avatarUrl
  }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation updateUserProfile($id: String!, $name: String!, $nickname: String) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { name: $name, nickname: $nickname }
    ) {
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
