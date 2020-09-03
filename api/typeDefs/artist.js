const { gql } = require('apollo-server-express');

const artistType = gql`
    type Artist {
        id: String!
        name: String!
    }
    type ArtistSelect {
        id: String!
        name: String!
    }
    extend type Query {
        findArtists(query: String!): [ArtistSelect]
    }
`;

module.exports = artistType;
