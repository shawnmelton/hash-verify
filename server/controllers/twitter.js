const TwitterSearch = require('../vendor/twitter/search');
const APIResponse = require('../models/apiResponse');
const BaseRouteController = require('./baseRoute');
const Route = require('../models/route');

class TwitterController extends BaseRouteController {
    constructor() {
        super();
        this.routes = [
            new Route('/tweets/byHashTag', (req, res) => {
                this.searchByHashTag(req, res);
            })
        ];
    }

    async _getTweetsByHashTag(hashTag, sinceId) {
        const search = new TwitterSearch();
        const tweets = await search.query({
            hashTag: '#'+ hashTag,
            sinceId: sinceId
        });

        try {
            return tweets.statuses;
        } catch (e) {
            return [];
        }
    }

    searchByHashTag(req, res) {
        const response = new APIResponse();
        if (this._hasParam(req, 'hashTag')) {
            this._getTweetsByHashTag(req.query.hashTag, req.query.sinceId || 0)
                .then((tweets) => {
                    response.setSuccess(tweets);
                    res.send(response);
                })
        } else {
            response.setError(400, 'Bad Request');
            res.send(response);
        }
    }
}

const controller = new TwitterController();
module.exports = controller;