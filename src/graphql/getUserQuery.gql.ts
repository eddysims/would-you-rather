import { gql } from "@apollo/client";
import { profileHeaderData } from "@/components/pages/dashboard/ProfileHeader";

export const GET_USER_QUERY = gql`
  query getUser($id: String!) {
    users(where: { id: { _eq: $id } }) {
      id
      ...profileHeaderData
    }
  }

  ${profileHeaderData}
`;
