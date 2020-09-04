const axios = require('axios');
const memcached = require('../../config/memcached');
const {
  SPOTIFY_REFRESH_TOKEN,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_CLIENT_ID,
} = require('../../config/vars');

const getSpotifyAccessToken = async () => {
  const accessToken = await memcached.get({ key: 'accessToken' });
  if (accessToken) return accessToken;

  const token = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
  ).toString('base64');
  const { data } = await axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    headers: {
      Authorization: `Basic ${token}`,
    },
    params: {
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    },
  });
  memcached.set({ key: 'accessToken', exp: data.expires_in });
  return data.accessToken;
};

module.exports = { getSpotifyAccessToken };
