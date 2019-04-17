/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //Webpack can import CSS files too!
import App from './components/app';

function refreshChild () {
    var route = window.location.hash.substr(1);
    //console.log('route', route);
    render(<App route={route} />, document.getElementById('app'));
}

refreshChild();
window.addEventListener('hashchange', refreshChild);