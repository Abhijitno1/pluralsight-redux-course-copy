import * as ActionTypes from '../actions/actionTypes';
import CourseApi from '../api/mockCourseApi';

const INITIAL_STATE = [];
export default function courseReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.CREATE_COURSE:
            return [
                ...state,
                Object.assign({id: state.length + 1}, action.course)
            ];
        case ActionTypes.GET_COURSES_LIST:
            return CourseApi.getCoursesSync();
        default:
            return state;
    }
}