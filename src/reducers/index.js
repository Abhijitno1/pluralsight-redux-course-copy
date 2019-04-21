import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;
