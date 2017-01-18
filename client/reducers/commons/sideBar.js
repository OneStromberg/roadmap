import { ActionType, StatusType } from './../../constants';

let initialState = {
    enabled:true,
    popupType:-1
};

export default function sideBar(state = initialState, action) {
    switch(action.type){
        case ActionType.common.SideBar.SIDEBAR_CHANGE_LAYER:
            if(action.popupType === state.popupType) {
                state = Object.assign({},state,{
                    popupType: -1
                });
            } else {
                state = Object.assign({},state,{
                    popupType: action.popupType
                });
            }
            break;
        default:
            return state;
    }
    return state;
};