import * as ActionTypes from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
    return {type: ActionTypes.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        CourseApi.getAllCourses()
            .then(courses =>
                dispatch(loadCoursesSuccess(courses)))
            .catch(error => {
                dispatch(ajaxCallError());
                throw(error); 
            });
    };
}

export function createCourseSuccess(course) {
    return {type: ActionTypes.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: ActionTypes.UPDATE_COURSE_SUCCESS, course};
}

export function saveCourse(course) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return CourseApi.saveCourse(course)
        .then(updcourse => {
            updcourse.id ? dispatch(updateCourseSuccess(updcourse)) : dispatch(createCourseSuccess(updcourse));
        })
        .catch(ex => { 
            dispatch(ajaxCallError());
            throw(ex); 
        });
    };
}