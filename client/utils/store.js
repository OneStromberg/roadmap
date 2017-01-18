import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

function configureStore(reducers, preloadedState) {
    return createStore(reducers, preloadedState, applyMiddleware(thunk));
}

export function prepareStore(reducers) {
    return configureStore(reducers, window.__PRELOADED_STATE__);
}

