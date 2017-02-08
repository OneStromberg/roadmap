import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

let initialState = {
};

function analytics(state = initialState, action) {
   return state;
};

const combinedReducers = combineReducers({
   routing: routerReducer
});

export default combinedReducers;