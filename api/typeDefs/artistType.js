const { gql } = require('apollo-server-express');

const artistType = gql`
    type Artist {
        id: Int
        name: String
    }
    type Query {
        allArtists(query: String!): [Artist]
    }
`;

module.exports = artistType;
