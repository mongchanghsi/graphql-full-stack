import { GraphQLEnumType } from "graphql";

export enum EMovieCategory {
  ACTION = "ACTION",
  COMEDY = "COMEDY",
  ROMANCE = "ROMANCE",
  HORROR = "HORROR",
}

export const MovieCategoryEnumType = new GraphQLEnumType({
  name: "MovieCategoryEnumType",
  values: {
    [EMovieCategory.ACTION]: {
      value: EMovieCategory.ACTION,
    },
    [EMovieCategory.COMEDY]: {
      value: EMovieCategory.COMEDY,
    },
    [EMovieCategory.ROMANCE]: {
      value: EMovieCategory.ROMANCE,
    },
    [EMovieCategory.HORROR]: {
      value: EMovieCategory.HORROR,
    },
  },
});

// The following is alternative method to use integer and map it to the actual string
export const AlternativeMovieCategoryEnumType = new GraphQLEnumType({
  name: "AlternativeMovieCategoryEnumType",
  values: {
    ACTION: {
      value: 0,
    },
    COMEDY: {
      value: 1,
    },
    ROMANCE: {
      value: 2,
    },
    HORROR: {
      value: 3,
    },
  },
});
