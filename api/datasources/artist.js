const { RESTDataSource } = require('apollo-datasource-rest');
const { SPOTIFY_API_BASE_URL } = require('../../config/vars');

const artistSelectReducer = (artist) => ({
  id: artist.id,
  name: artist.name,
});

class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = SPOTIFY_API_BASE_URL;
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request) {
    request.headers.set('Authorization', 'Bearer BQAskQz8s1Oe8WQT2ZgwuapN3K4Rlr85RNyU1ztlIW611QFonFLXN1gtl4FeVu8AD4H_7KpXwrmOM4x-ECyj9tUeNdVdI4Cq52MulRjjusCCO4L2kzAyAUwWpERyxRdj2eK4reucTAlkDv4');
  }

  async findArtists({ query }) {
    const { artists: { items } } = await this.get(`/search?q=${query}&type=artist&limit=50`);
    return items.map(artistSelectReducer);
  }
}

module.exports = ArtistAPI;
