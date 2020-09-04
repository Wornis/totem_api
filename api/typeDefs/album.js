const { gql } = require('apollo-server-express');

const albumType = gql`
    type AlbumImage {
        height: Int!
        url: String!
        width: Int!
    }
    type Album {
        id: String!
        name: String!
        releaseDate: String!
        totalTracks: Int!
        uri: String!
        albumImages: [AlbumImage]
    }
    extend type Query {
        albums(artistId: String!): [Album]
    }
`;

module.exports = albumType;
