import { ActionType } from './../../constants';

export function show() {
    return {
        type: ActionType.common.SideBar.SIDEBAR_SHOW
    };
}

export function showDropdownMenu(popupType) {
    return {
        type: ActionType.common.SideBar.SIDEBAR_CHANGE_LAYER,
        popupType: popupType
    };
}

export function hide() {
    clearInterval(intervalId);
    intervalId = -1;
    return {
        type: ActionType.common.SideBar.SIDEBAR_HIDE
    };
}