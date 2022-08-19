import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";
import UserType from "./UserType";

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    duration: { type: new GraphQLNonNull(GraphQLInt) }, // Ensures that the duration attribute must not be null else the graphql will throw error
    characters: { type: new GraphQLList(UserType) },
  }),
});

export default MovieType;
