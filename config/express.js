const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../api/schema');
const resolvers = require('../api/resolvers');

const app = express();

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
});

SERVER.applyMiddleware({ app });

module.exports = app;
