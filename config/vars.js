const path = require('path');
require('dotenv-safe').config({
  path: path.join(__dirname, '../.env'),
  example: path.join(__dirname, '../.env.example'),
  allowEmptyValues: true,
});

const { env } = process;

module.exports = {
  NODE_ENV: env.NODE_ENV,
  HOST: env.HOST,
  PORT: env.PORT,
  SPOTIFY_API_BASE_URL: env.SPOTIFY_API_BASE_URL,
  SPOTIFY_CLIENT_ID: env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: env.SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN: env.SPOTIFY_REFRESH_TOKEN,
  MEMCACHED_HOST: env.MEMCACHED_HOST,
  MEMCACHED_PORT: env.MEMCACHED_PORT,
};
