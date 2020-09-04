const { RESTDataSource } = require('apollo-datasource-rest');
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
  willSendRequest(request) {
    request.headers.set('Authorization', 'Bearer BQDYTSosk5UzbGiXWe-01rXk5ns3H-1qChirnK6JO3KW7BRDQHoF68lBewGmpcV5xh_tSwZSpt3mqtcTAjMoU1noU7fqiULRlRcS5iJew6IP_VQq5Wjuz3MTMbAtBhO7kArYhuNDAEwPRzg');
  }

  async findArtists({ query }) {
    const { artists: { items } } = await this.get(`/search?q=${query}&type=artist&limit=50`);
    return items.map(artistReducer);
  }
}

module.exports = ArtistAPI;
