import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    fullName: {
      type: GraphQLString,
      resolve(user) {
        return user.firstName + " " + user.lastName;
      },
    },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    ipAddress: { type: GraphQLString },
  }),
});

export default UserType;
