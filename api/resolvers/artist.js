const artistsResolvers = {
  Query: {
    artists: async (_, { query }, { dataSources }) => {
      // TODO HANDLE EXPIRED ACCES TOKEN (REFRESH IT WITH REFRESH TOKEN)
      const artists = await dataSources.artistAPI.findArtists({ query });
      return artists;
    },
  },
};

module.exports = artistsResolvers;
