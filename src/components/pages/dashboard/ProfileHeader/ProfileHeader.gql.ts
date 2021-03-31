import { gql } from "@apollo/client";

export const profileHeaderData = gql`
  fragment profileHeaderData on users {
    avatarUrl
    name
  }
`;
