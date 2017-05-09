const GetRequest = require('../../ajax/getRequest');
const AjaxResponse = require('../../../models/ajaxResponse');

const appConfig = require('../../../config');

class TwitterSearch {
    async byHashTag(hashTag) {
        const request = new GetRequest(appConfig.API_URL + '/tweets/byHashTag?hashTag='+ hashTag);
        const response = new AjaxResponse(await request.call());

        if (response.isValid() && response.hasError() === false) {
            return response.getResult();
        }

        return [];
    }
}

module.exports = TwitterSearch;