/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //Webpack can import CSS files too!
import '../node_modules/toastr/build/toastr.min.css';
import routes from './routes';
import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
</Provider>, document.getElementById('app'));
