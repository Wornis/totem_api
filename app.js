const app = require('./config/express');
const { HOST, PORT, NODE_ENV } = require('./config/vars');

app.listen(PORT, () => {
  console.info(`--- Started ${NODE_ENV} on ${HOST}:${PORT} ---`);
});
