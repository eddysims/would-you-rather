import { gql } from "@apollo/client";
import { profileData } from "@/components/Profile";

export const DASHBOARD_QUERY = gql`
  query getUser($id: String!) {
    users(where: { id: { _eq: $id } }) {
      id
      ...profileData
    }
  }

  ${profileData}
`;
