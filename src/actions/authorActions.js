import * as ActionTypes from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return {type: ActionTypes.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        AuthorApi.getAllAuthors()
            .then(authors => dispatch(loadAuthorsSuccess(authors)))
            .catch(error=> { 
                dispatch(ajaxCallError());
                throw(error);
            });
    }
}