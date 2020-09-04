const { gql } = require('apollo-server-express');

const artistType = gql`
    type Artist {
        id: String!
        name: String!
    }
    extend type Query {
        artists(query: String!): [Artist]
    }
`;

module.exports = artistType;
