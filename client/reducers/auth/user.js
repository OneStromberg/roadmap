import { ActionType, StatusType } from './../../constants';

let initialState = {
    avatarURL:null,
    firstName:null,
    email:null,
    position:null,
    creationDate:null,
    phone:null,
    city:null,
    street:null,
    lastName:null,
    email:"zajno@gmail.com"
};

export default function dialog(state = initialState, action) {
    switch(action.type){
        case ActionType.authApp.LOGIN:
            return  Object.assign({},  state, action.data);
        case ActionType.authApp.UPDATE_AVATAR:
            return  Object.assign({},  state, {avatarURL:action.url});
        default:
            return state;
    }
};