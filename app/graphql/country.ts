import { gql } from "graphql-request";

export const GetAllCountries = gql`
  query GetAllCountries {
    countries {
      name
      code
    }
  }
`;

export const GetCountry = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      continent {
        name
      }
      languages {
        code
        name
      }
    }
  }
`;
