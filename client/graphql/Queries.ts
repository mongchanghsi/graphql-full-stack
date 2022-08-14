import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_APY_AAVE = gql`
  {
    reserves {
      name
      underlyingAsset

      liquidityRate
      stableBorrowRate
      variableBorrowRate

      aEmissionPerSecond
      vEmissionPerSecond
      sEmissionPerSecond

      totalATokenSupply
      totalCurrentVariableDebt
    }
  }
`;
