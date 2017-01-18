import { ActionType, StatusType } from './../../constants';

let initialState = {
    error:null,
    userList: null,
    status: StatusType.NORMAL,
};

export default function dialog(state = initialState, action) {
    switch(action.type){
        case ActionType.authApp.REMOVE_USERS:
            var userList = [];
            if (state.userList && action.data) {
                state.userList.forEach(user => {
                    if (action.data.indexOf(user) === -1){
                        userList.push(user);
                    }
                });
            }
            return Object.assign({}, state, {userList: userList});
        case ActionType.authApp.GET_USER_LIST:
            return Object.assign({}, state, {userList: action.data});
        case ActionType.authApp.REQUEST_INVITE:
            return  Object.assign({}, state, {error:action.error});
        case ActionType.authApp.COMPLETE_REGISTRATION:
            return  Object.assign({}, state, {error:action.error});
        case ActionType.authApp.FORGOT_PASSWORD:
            return  Object.assign({}, state,{error:action.error});
        default:
            return state;
    }
};