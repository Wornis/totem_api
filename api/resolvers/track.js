const tracksResolvers = {
  Query: {
    tracks: async (_, { albumId }, { dataSources }) => {
      const tracks = await dataSources.trackAPI.getAlbumTracks({ albumId });
      return tracks;
    },
  },
};

module.exports = tracksResolvers;
