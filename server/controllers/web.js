const BaseRouteController = require('./baseRoute');
const Route = require('../models/route');
const fs = require('fs');
const path = require('path');

class WebController extends BaseRouteController {
    constructor() {
        super();
        this.routes = [
            new Route('/', (req, res) => {
                this.spa(req, res);
            }),
            new Route('/about', (req, res) => {
                this.spa(req, res);
            })
        ];
    }

    spa(req, res) {
        res
            .set({
                'content-type': 'text/html'
            })
            .sendFile(path.resolve('./html/index.html'));
    }
}

const controller = new WebController();
module.exports = controller;