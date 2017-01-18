import { ActionType, StatusType } from './../../constants';

let initialState = {
    message: null,
    duration: -1,
    status: null,
    enabled:false
};

export default function notification(state = initialState, action) {
    switch(action.type){
        case ActionType.common.Notification.NOTIFICATION_SHOW:
            return  Object.assign({}, state, {duration: action.duration, message: action.message, enabled: true});
        case ActionType.common.Notification.NOTIFICATION_HIDE:
            return  Object.assign({}, state, {duration: -1, message: null, enabled: false});
        default:
            return state;
    }
};