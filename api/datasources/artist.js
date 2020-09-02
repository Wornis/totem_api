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
    request.headers.set('Authorization', 'Bearer BQCi1yHt3JCwzrhbxw2wslwpCU3rWwIOsKyJSOW9dXU9CsRfeYKNXI4W6ufWz-VNRtB9wDHO-CBSlLXRtCgWqIcKe2Z1VB0U10yim0btm58dzzrOUnVgAVUc4PSmb8OjjJR0GApOkL0sJ_Q');
  }

  async findArtists({ query }) {
    const { artists: { items } } = await this.get(`/search?q=${query}&type=artist`);
    return items.map(artistSelectReducer);
  }
}

module.exports = ArtistAPI;
