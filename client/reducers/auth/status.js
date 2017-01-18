import { ActionType, StatusType } from './../../constants';

let initialState = StatusType.NORMAL;

export default function dialog(state = initialState, action) {
    switch(action.type){
        case ActionType.authApp.LOGIN:
        case ActionType.authApp.STATUS_CHANGE:
        case ActionType.authApp.REQUEST_INVITE:
        case ActionType.authApp.COMPLETE_REGISTRATION:
        case ActionType.authApp.FORGOT_PASSWORD:
            return  action.status;
            /*
            return  Object.assign({}, state, {status: action.status, error:action.error});
            return  Object.assign({}, state, {status: action.status, error:action.error});
            return  Object.assign({}, state,{status: action.status, error:action.error});
            */
        default:
            return state;
    }
};