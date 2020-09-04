const { RESTDataSource } = require('apollo-datasource-rest');
const { SPOTIFY_API_BASE_URL } = require('../../config/vars');

const albumReducer = (album) => ({
  id: album.id,
  name: album.name,
  releaseDate: album.release_date,
  totalTracks: album.total_tracks,
  uri: album.uri,
  albumImages: album.images,
});

class AlbumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = SPOTIFY_API_BASE_URL;
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request) {
    request.headers.set('Authorization', 'Bearer BQDYTSosk5UzbGiXWe-01rXk5ns3H-1qChirnK6JO3KW7BRDQHoF68lBewGmpcV5xh_tSwZSpt3mqtcTAjMoU1noU7fqiULRlRcS5iJew6IP_VQq5Wjuz3MTMbAtBhO7kArYhuNDAEwPRzg');
  }

  async getArtistAlbums({ artistId }) {
    const { items } = await this.get(`/artists/${artistId}/albums?include_groups=album`);

    return items.map(albumReducer);
  }
}

module.exports = AlbumAPI;
