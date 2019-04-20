import * as ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = [];
export default function courseReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.CREATE_COURSE:
            return [
                ...state,
                Object.assign({id: state.length + 1}, action.course)
            ];
        case ActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}