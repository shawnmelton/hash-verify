const AjaxRequest = require('./ajaxRequest');

class GetRequest extends AjaxRequest {
    constructor(url) {
        super(url);

        this.method = 'GET';
    }


}

module.exports = GetRequest;