const { RESTDataSource } = require('apollo-datasource-rest');
const { getSpotifyAccessToken } = require('../utils/spotify');
const { SPOTIFY_API_BASE_URL } = require('../../config/vars');

const artistReducer = (artist) => ({
  id: artist.id,
  name: artist.name,
});

class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = SPOTIFY_API_BASE_URL;
  }

  // eslint-disable-next-line class-methods-use-this
  async willSendRequest(request) {
    const accessToken = await getSpotifyAccessToken();
    request.headers.set('Authorization', `Bearer ${accessToken}`);
  }

  async findArtists({ query }) {
    const { artists: { items } } = await this.get(`/search?q=${query}&type=artist&limit=50`);
    return items.map(artistReducer);
  }
}

module.exports = ArtistAPI;
