import * as ActionTypes from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
    return {type: ActionTypes.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return function(dispatch) {
        AuthorApi.getAllAuthors()
            .then(authors => dispatch(loadAuthorsSuccess(authors)))
            .catch(error=> { throw(error);});
    }
}