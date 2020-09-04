const { gql } = require('apollo-server-express');

const trackType = gql`
    type Track {
        id: String!
        name: String!
        duration: Int!
        trackNumber: Int!
        uri: String!
    }
    extend type Query {
        tracks(albumId: String!): [Track]
    }
`;

module.exports = trackType;
