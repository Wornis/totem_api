const { RESTDataSource } = require('apollo-datasource-rest');
const { getSpotifyAccessToken } = require('../utils/spotify');
const { SPOTIFY_API_BASE_URL } = require('../../config/vars');

const trackReducer = (track) => ({
  id: track.id,
  trackNumber: track.track_number,
  duration: track.duration_ms,
  name: track.name,
  uri: track.uri,
});

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = SPOTIFY_API_BASE_URL;
  }

  // eslint-disable-next-line class-methods-use-this
  async willSendRequest(request) {
    const accessToken = await getSpotifyAccessToken();
    request.headers.set('Authorization', `Bearer ${accessToken}`);
  }

  async getAlbumTracks({ albumId }) {
    const { items } = await this.get(`/albums/${albumId}/tracks`);
    return items.map(trackReducer);
  }
}

module.exports = TrackAPI;
