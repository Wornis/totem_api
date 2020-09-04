const { RESTDataSource } = require('apollo-datasource-rest');
const { getSpotifyAccessToken } = require('../utils/spotify');
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
  async willSendRequest(request) {
    const accessToken = await getSpotifyAccessToken();
    request.headers.set('Authorization', `Bearer ${accessToken}`);
  }

  async getArtistAlbums({ artistId }) {
    const { items } = await this.get(`/artists/${artistId}/albums?include_groups=album`);
    return items.map(albumReducer);
  }
}

module.exports = AlbumAPI;
