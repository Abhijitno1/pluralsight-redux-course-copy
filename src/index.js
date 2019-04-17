/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //Webpack can import CSS files too!

render(<h1>React and Redux in ES6 Derived from Pluralsight Course</h1>, document.getElementById('app'));
