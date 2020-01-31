const { gql } = require('apollo-server');

const typeDefs = gql`

    type Quote {
        quote: String
        length: Int
        author: String 
        category: String
        date: String
    }

    type Query {
        getQuote: Quote
    }

`

module.exports = typeDefs;