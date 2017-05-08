const GetRequest = require('../../ajax/getRequest');
const AjaxResponse = require('../../../models/ajaxResponse');

const appConfig = require('../../../config');

class TwitterSearch {
    async byHasTag(hashTag) {
        const request = new GetRequest(config.API_URL + '/tweets/byHashTag')
        const response = new AjaxResponse(await request.call());

        if (response.isValid() && response.hasError() === false) {
            return response.getResult();
        }

        return [];
    }
}