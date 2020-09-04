const artistType = require('./artist');
const albumType = require('./album');
const trackType = require('./track');

const Query = `
  type Query {
    _empty: String
  }
`;

const typeDefs = [
  Query,
  artistType,
  albumType,
  trackType,
];

module.exports = typeDefs;
