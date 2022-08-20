# GraphQL Full Stack

This is a sample code which uses Express for backend which utilises GraphQL to perform queries. As for frontend, there will be several approaches in consuming GraphQL queries such as querying into own backend, publicly available graphql (fetching countries) and lastly subgraphs (fetching AAVE supported tokens).

## Why is there 2 server folders?

The `server` folder contains implementation of using only strictly graphql whereas `server2` folder contains implementation of using apollo, which in my opinion provides a cleaner implementation as compared to simply using graphql library
