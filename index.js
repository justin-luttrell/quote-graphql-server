const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const QuoteAPI = require('./datasource/quoteAPI');

const server = new ApolloServer({ 
    typeDefs,
    quoteAPI: new QuoteAPI()
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });