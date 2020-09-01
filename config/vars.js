const path = require('path');
require('dotenv-safe').config({
  path: path.join(__dirname, '../../.env'),
  example: path.join(__dirname, '../../.env.example'),
  allowEmptyValues: true,
});

const { env } = process;

module.exports = {
  ENV: env.NODE_ENV,
  PORT: env.PORT,
};
