const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const QuoteAPI = require('./datasource/quoteAPI');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        quoteAPI: new QuoteAPI()
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
