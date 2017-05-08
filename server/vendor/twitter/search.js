const twitterAuth = require('./auth');

class TwitterSearch {
    async query(params) {
        const tweets = await twitterAuth.getClient().get('search/tweets', {
            q: params.hashTag,
            since_id: params.sinceId,
            lang: 'en'
        });

        return tweets;
    }
}

module.exports = TwitterSearch;