import { gql } from "apollo-server-core";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    email: String!
    gender: Gender!
    ipAddress: String
  }

  type Movie {
    id: ID!
    name: String!
    duration: Int!
    type: MovieCategory
    characters: [User]
    similar: [Movie]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(id: ID!): Movie
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    gender: Gender = PREFERNOTTOSAY
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    deleteUser(id: ID!): User
  }

  enum Gender {
    MALE
    FEMALE
    PREFERNOTTOSAY
  }

  enum MovieCategory {
    ACTION
    ROMANCE
    HORROR
    COMEDY
  }
`;

export default typeDefs;
