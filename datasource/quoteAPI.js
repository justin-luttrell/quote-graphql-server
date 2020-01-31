const { RESTDataSource } = require('apollo-datasource-rest');

class QuoteAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "https://quotes.rest/qod.json";
    }

    async getQuote(){
        const res = await this.get("");
        return this.quoteReducer(res);
    }

    quoteReducer(quote){
        return {
            quote: quote.contents.quotes[0].quote,
            length: quote.contents.quotes[0].length,
            author: quote.scontents.quotes[0].autor,
            category: quote.contents.quotes[0].category,
            date: quote.contents.quotes[0].date
        }
    }
}

module.exports = QuoteAPI;