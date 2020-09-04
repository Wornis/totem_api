const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../api/typeDefs');
const resolvers = require('../api/resolvers');
const ArtistAPI = require('../api/datasources/artist');
const AlbumAPI = require('../api/datasources/album');
const TrackAPI = require('../api/datasources/track');

const app = express();

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    artistAPI: new ArtistAPI(),
    albumAPI: new AlbumAPI(),
    trackAPI: new TrackAPI(),
  }),
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
});

SERVER.applyMiddleware({ app });

module.exports = app;
