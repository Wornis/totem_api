const artistType = require('./artist');
const albumType = require('./album');

const Query = `
  type Query {
    _empty: String
  }
`;

const typeDefs = [
  Query,
  artistType,
  albumType,
];

module.exports = typeDefs;
