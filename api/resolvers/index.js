const artistsResolvers = require('./artist');
const albumsResolvers = require('./album');

const resolvers = [
  artistsResolvers,
  albumsResolvers,
];

module.exports = resolvers;
