/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //Webpack can import CSS files too!
import App from './components/app';

render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
