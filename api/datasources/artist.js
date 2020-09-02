const { RESTDataSource } = require('apollo-datasource-rest');
const { SPOTIFY_API_BASE_URL } = require('../../config/vars');

class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = SPOTIFY_API_BASE_URL;
  }

  async getArtists({ query = 'tania bowra' }) {
    const artists = await this.get(`/search?q=${query}&type=artist`);
    return artists;
  }
}

module.exports = ArtistAPI;
