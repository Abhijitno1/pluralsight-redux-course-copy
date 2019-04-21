import * as ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = [];

export default function authorsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        default:
            return state;
    }
}