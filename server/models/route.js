class Route {
    constructor(url, method) {
        this.url = url;
        this.method = method;
    }

    getMethod() {
        return this.method;
    }

    getUrl() {
        return this.url;
    }
}

module.exports = Route;