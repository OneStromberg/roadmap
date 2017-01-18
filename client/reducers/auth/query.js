import { ActionType, StatusType } from './../../constants';

let initialState = null;

export default function dialog(state = initialState, action) {
    switch(action.type){
        case ActionType.authApp.SET_QUERY:
            state = action.query
            return  state;
        default:
            return null;
    }
};