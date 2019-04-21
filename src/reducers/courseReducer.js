import * as ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = [];
export default function courseReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        case ActionTypes.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                //Object.assign({id: state.length + 1}, action.course)
                Object.assign({}, action.course)
            ];
        case ActionTypes.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(kors => kors.id != action.course.id),
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}