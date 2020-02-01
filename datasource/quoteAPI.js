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

    quoteReducer(data){
        return {
            quote: data.contents.quotes[0].quote,
            length: data.contents.quotes[0].length,
            author: data.contents.quotes[0].author,
            category: data.contents.quotes[0].category,
            date: data.contents.quotes[0].date
        }
    }
}

module.exports = QuoteAPI;