import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sideBar from './../commons/sideBar';
import appBar from './appBar';
import data from './data';
import notification from './../commons/notification';
import status from './status';
import user from './user';
import query from './query';

const combinedReducers = combineReducers({
    user,
    application: combineReducers({sideBar, appBar, data, notification, status, query}),
    routing: routerReducer
});

export default combinedReducers;