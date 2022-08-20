import MockUserData from "../MOCK_DATA.json";
import MockMovieData from "../MOCK_MOVIE_DATA.json";

const resolvers = {
  Query: {
    users: () => {
      return MockUserData;
    },

    user: (parent: any, args: any) => {
      const id = args.id;
      return MockUserData.filter((user) => user.id == Number(id))[0];
    },

    movies: () => {
      return MockMovieData;
    },

    movie: (parent: any, args: any) => {
      const id = args.id;
      return MockMovieData.filter((movie) => movie.id == Number(id))[0];
    },
  },

  User: {
    fullName: (user: any) => {
      return `${user.firstName} ${user.lastName}`;
    },
  },

  Movie: {
    similar: (movie: any) => {
      const similarMovieId = movie.similar;
      return MockMovieData.filter((_m) => similarMovieId.includes(_m.id));
    },
  },

  Mutation: {
    createUser: (parent: any, args: any) => {
      const user = args.input;
      const lastId = MockUserData[MockUserData.length - 1].id;
      user.id = lastId + 1;
      MockUserData.push(user);
      return user;
    },

    deleteUser: (parent: any, args: any) => {
      const id = args.id;
      MockUserData.filter((user) => user.id !== Number(id));
      return null;
    },
  },
};

export default resolvers;
