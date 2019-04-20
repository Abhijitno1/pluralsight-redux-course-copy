import * as ActionTypes from './actionTypes';

export function createCourse(course) {
    return {type: ActionTypes.CREATE_COURSE, course};
}

export function getCoursesList() {
    return {type: ActionTypes.GET_COURSES_LIST}
}