# TOTEM_API

Ce qui n'a pas été implémenté: 
- Un module d'authentification
- Les tests unitaires
- Gestion des erreurs

GraphQL architecture => Role-oriented

Memcached => Solution de cache.  
Pour installer memcached, un simple `apt-get install memcached` suffit.   
Sinon utiliser l'image docker https://hub.docker.com/_/memcached


.env à placer à la racine du projet :
```json
NODE_ENV=development
HOST=http://localhost
PORT=4000
SPOTIFY_API_BASE_URL=https://api.spotify.com/v1
SPOTIFY_CLIENT_ID=d42710989d5d4ae994cf227b2fc8ff62
SPOTIFY_CLIENT_SECRET=151af0f284e94eac81cd7e1b4ff3415e
SPOTIFY_REFRESH_TOKEN=AQD_gRkxPCjlH_dQ-gYhSJ6TZw_gr0FiVe8X9yqVcfVgTzi61WgswnYSfE8-OC8ws_M-C_Lbu-L_iXj1VO47D6r7ppHKSsLUF2_O4BowCjHld2Lr6SF2KSqiumtNwn56Glc
MEMCACHED_HOST=127.0.0.1
MEMCACHED_PORT=11211
```

