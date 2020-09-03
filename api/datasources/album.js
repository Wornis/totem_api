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
    request.headers.set('Authorization', 'Bearer BQBmG1jA2ZznDzuu24oXGYca5jbsEJDPX3-tMuQIS8XXjuToXJVUpXupOh1AxkJnRyqaA-m1NUQSMZn-LeBApzK0T-6WQAD-U3hicpcHhf0Gjkk-m4M8xOQ-hDO-xlgh1vDNH9Au_xIklGg');
  }

  async getArtistAlbums({ artistId }) {
    const { items } = await this.get(`/artists/${artistId}/albums?include_groups=album`);

    return items.map(albumReducer);
  }
}

module.exports = AlbumAPI;
