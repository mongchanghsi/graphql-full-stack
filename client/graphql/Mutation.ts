import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $gender: String!
    $ipAddress: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      gender: $gender
      ipAddress: $ipAddress
    ) {
      firstName
    }
  }
`;
