import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import express, { Express, Request, Response } from "express";
import http from "http";
import typeDefs from "./schemas/typeDefs";
import resolvers from "./schemas/resolvers";

const port = 8080;

const startApolloServer = async (typeDefs: any, resolvers: any) => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  app.get("/", (_req: Request, _res: Response) => {
    _res.send("Welcome!");
  });

  await server.start();
  server.applyMiddleware({
    app,
    // Not recommened as other graphql libraries may prefix to use /graphql resource
    path: "/graphql",
  });

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
};

startApolloServer(typeDefs, resolvers);
