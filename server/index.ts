import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schemas";
import cors from "cors";

const app: Express = express();
const port = 8080;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
