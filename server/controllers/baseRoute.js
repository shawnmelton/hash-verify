class BaseRouteController {
    constructor() {
        this.app = null;
        this.routes = [];
    }

    _hasParam(req, param) {
        try {
            return (req.query[param]);
        } catch (e) {}

        return false;
    }

    _setRoutes() {
        this.routes.forEach((route) => {
            this.app.get(route.getUrl(), route.getMethod());
        });
    }

    init(app) {
        this.app = app;
        this._setRoutes();
    }
}

module.exports = BaseRouteController;