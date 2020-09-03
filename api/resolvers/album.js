const albumsResolvers = {
  Query: {
    getArtistsAlbums: async (_, { artistId }, { dataSources }) => {
      const albums = await dataSources.albumAPI.getArtistAlbums({ artistId });
      return albums;
    },
  },
};

module.exports = albumsResolvers;
