const artistsResolvers = {
  Query: {
    allArtists: async (_, { query }, { dataSources }) => {
      const artists = await dataSources.artistAPI.getArtists({ query });
      return artists;
    },
  },
};

module.exports = artistsResolvers;
