const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../api/typeDefs');
const resolvers = require('../api/resolvers');
const ArtistAPI = require('../api/datasources/artist');

const app = express();

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    artistAPI: new ArtistAPI(),
  }),
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
});

SERVER.applyMiddleware({ app });

module.exports = app;
