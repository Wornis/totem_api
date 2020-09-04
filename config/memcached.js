const MemcachedClient = require('memcached');
const { MEMCACHED_HOST: HOST, MEMCACHED_PORT: PORT } = require('./vars');

class Memcached {
  constructor() {
    if (!Memcached.instance) {
      Memcached.instance = this;
      this.memcached = new MemcachedClient(`${HOST}:${PORT}`);
    }
    return Memcached.instance;
  }

  set({ key, value = null, exp = 60 }) {
    return new Promise((resolve, reject) => {
      this.memcached.set(key, value, exp, (err) => (err ? reject(err) : resolve()));
    });
  }

  get({ key }) {
    return new Promise((resolve, reject) => {
      this.memcached.get(key, (err, data) => ((err) ? reject(err) : resolve(data)));
    });
  }
}

const instance = new Memcached();
Object.freeze(instance);

module.exports = instance;
