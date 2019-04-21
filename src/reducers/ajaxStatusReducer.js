import * as ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = 0;

function actionTypeEndsInSuccess(actionName) {
    return actionName.substring(actionName.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = INITIAL_STATE, action) {
    if (action.type === ActionTypes.BEGIN_AJAX_CALL)
        return state + 1;
    else if (actionTypeEndsInSuccess(action.type) || action.type === ActionTypes.AJAX_CALL_ERROR)
        return state - 1;

    return state;
}