module.exports = {

    Query: {
        getQuote: (_,__, { dataSources }) => {
            return dataSources.quoteAPI.getQuote();
        }
    }

};