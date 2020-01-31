const { RESTDataSource } = require('apollo-datasource-rest');

class QuoteAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "https://quotes.rest/qod.json";
    }

    async getQuote(){
        return this.get();
    }
}

module.exports = QuoteAPI;