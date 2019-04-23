import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/homePage';
import CoursesPage from './components/courses/coursesPage';
import ManageCoursePage from './components/courses/manageCoursePage';
import AboutPage from './components/about/aboutPage';
import XmlData2Html from './components/xmldatademo/xmlData2Html';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="about" component={AboutPage} />
        <Route path="xml2html" component={XmlData2Html} />
    </Route>
);
