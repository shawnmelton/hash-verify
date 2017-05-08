const express = require('express');
const twitterController = require('./server/controllers/twitter');
const webController = require('./server/controllers/web');

const app = express();

twitterController.init(app);
webController.init(app);

app.listen(3000, function(req, res) {
    console.log('Service has successfully started.  All requests for this service should be routed through http://localhost:3000/.');
});