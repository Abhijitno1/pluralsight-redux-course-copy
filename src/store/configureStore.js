import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

export default function(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}