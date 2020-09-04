const artistsResolvers = require('./artist');
const albumsResolvers = require('./album');
const tracksResolvers = require('./track');

const resolvers = [
  artistsResolvers,
  albumsResolvers,
  tracksResolvers,
];

module.exports = resolvers;
