import { gql } from "@apollo/client";
import { profileData } from "@/components/Profile";
import { questionData } from "@/components/Question";

export const DASHBOARD_QUERY = gql`
  query getUser($id: String!) {
    users(where: { id: { _eq: $id } }) {
      id
      ...profileData
      ...questionData
    }
  }

  ${profileData}
  ${questionData}
`;
