const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./api/schema');
const resolvers = require('./api/resolvers');

const app = express();
const PORT = 4000;

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
});

SERVER.applyMiddleware({ app });

app.listen(PORT, () => console.log('🚀GraphQL playground is running at http://localhost:4000'));
