import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";
import { MovieCategoryEnumType } from "../enums";
import UserType from "./UserType";
import MockMovieData from "../../MOCK_MOVIE_DATA.json";

const MovieType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    duration: { type: new GraphQLNonNull(GraphQLInt) }, // Ensures that the duration attribute must not be null else the graphql will throw error
    characters: { type: new GraphQLList(UserType) },
    type: { type: MovieCategoryEnumType },
    similar: { type: new GraphQLList(MovieType) },
  }),
});

export default MovieType;
