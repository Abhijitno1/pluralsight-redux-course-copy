import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/homePage';
import CoursesPage from './components/courses/coursesPage';
import AboutPage from './components/about/aboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
