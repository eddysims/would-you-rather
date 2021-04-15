import { gql } from "@apollo/client";

export const FOOTER_DATA_QUERY = gql`
  query getTotalCounts {
    question_aggregate {
      aggregate {
        count
        sum {
          voteOne
          voteTwo
        }
      }
    }
  }
`;
