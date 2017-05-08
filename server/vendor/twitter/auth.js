const Twitter = require('twitter');

class TwitterAuth {
    constructor() {
        this.client = new Twitter({
            consumer_key: 'Sk8JyqMiXOHz7GfYyy4aWNeR4',
            consumer_secret: 'TokIx6fmugBYbpL73jAUcz0uwvFlN8TlaKjm1SxYXDvC0u5jSE',
            access_token_key: '431035831-JJdjiADMw76yuzmKb5o8kYg4ji1E3eiLtqKwXu0U',
            access_token_secret: 'vC6uiRkIAtQQLqIjWYV3qFPCcsoiK05wsQCRzbCcWpvBd'
        });
    }

    getClient() {
        return this.client;
    }
}

twitterAuth = new TwitterAuth();
module.exports = twitterAuth;