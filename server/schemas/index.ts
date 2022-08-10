import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import UserType from "./TypeDefs/UserType";
import MockUserData from "../MOCK_DATA.json";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: {},
      resolve(parent, args) {
        return MockUserData;
      },
    },
    getUserById: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return MockUserData.filter((user) => user.id === args.id)[0];
      },
    },
    getUserByFirstName: {
      type: UserType,
      args: { firstName: { type: GraphQLString } },
      resolve(parent, args) {
        return MockUserData.filter(
          (user) => user.firstName === args.firstName
        )[0];
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        ipAddress: { type: GraphQLString },
      },
      resolve(parent, args) {
        MockUserData.push({
          id: MockUserData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          gender: args.gender,
          ipAddress: args.ipAddress,
        });
        return args;
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

export default schema;
