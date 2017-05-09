import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import Home from './components/home';
import About from './components/about';
import HashTagStream from './components/hashTagStream';

const routerHistory = createHistory();

ReactDOM.render((
    <Router history={routerHistory}>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/stream" component={HashTagStream} />
        </div>
    </Router>
), document.getElementById('root'));