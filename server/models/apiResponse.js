class APIResponse {
    constructor() {
        this.result = null;
        this.status = {};
    }

    getStatusCode() {
        return this.status.code;
    }

    setError(code, message) {
        this.status.code = code;
        this.status.response = message;
    }

    setSuccess(data) {
        this.result = data;
        this.status.code = 200;
        this.status.response = 'OK';
    }
}

module.exports = APIResponse;