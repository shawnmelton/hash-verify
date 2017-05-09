import React from 'react';

const template = (component) => {
    return (
        <div className="pt50 pb50">
            <a className="clearFix mb15 block cursor txtWhite" onClick={(e) => {
                component.onReturnClick(e);
            }}>
                <span className="material-icons left mr5 block">keyboard_backspace</span>
                <strong className="left block">Back</strong>
            </a>
            <h3 className="mb25">About this Project</h3>
            <h4 className="mb10 txtUpperCase">Goals</h4>
            <ul className="mb50 lineHeight18">
                <li>Create a Single Page Application</li>
                <li>Interacts with a public API</li>
                <li>Renders API data on the page</li>
                <li>Allows the end user to interact with the data</li>
            </ul>
            <h4 className="mb10 pt15 txtUpperCase">Tech</h4>
            <p className="mb10 lineHeight18">
                This project utlizes the following technologies:
            </p>
            <ul className="mb25 lineHeight18">
                <li><a href="https://expressjs.com/" target="_blank" className="fw800 cursor txtBlue">Express</a> :: Proxy / Middleware Layer</li>
                <li><a href="https://facebook.github.io/react/" target="_blank" className="fw800 cursor txtBlue">React</a> :: Frontend SPA</li>
                <li><a href="https://dev.twitter.com/rest/public" target="_blank" className="fw800 cursor txtBlue">Twitter API</a> :: Data Source</li>
                <li><a href="http://browserify.org/" target="_blank" className="fw800 cursor txtBlue">Browserify</a> :: ES6 / Frontend Build</li>
                <li><a href="https://gruntjs.com/" target="_blank" className="fw800 cursor txtBlue">Grunt</a> :: Frontend Build Tasks</li>
                <li><a href="http://sass-lang.com/" target="_blank" className="fw800 cursor txtBlue">SASS</a> :: CSS Preprocessing</li>
                <li><a href="https://github.com/" target="_blank" className="fw800 cursor txtBlue">Git</a> :: Version control</li>
            </ul>
        </div>
    )
};
module.exports = template;