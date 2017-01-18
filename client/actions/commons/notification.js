import { ActionType } from './../../constants';

let intervalId = -1;

export function show(message, duration = -1, callback) {
    return function (dispatch) {
        if (duration > -1) {
            let step = duration;
            dispatch(_show(message, step));
            intervalId = setInterval(() => {
                if (step === 0) {
                    dispatch(hide());
                    if (callback) {
                        dispatch(callback);
                    }
                } else {
                    dispatch(_show(message, step));
                    step--;
                }
            }, 1000);
            
        }
        return _show(message, duration);
    };
}

function _show(message, duration ) {
    return {
        type: ActionType.common.Notification.NOTIFICATION_SHOW,
        message: message,
        duration: duration
    };
}

export function hide() {
    clearInterval(intervalId);
    intervalId = -1;
    return {
        type: ActionType.common.Notification.NOTIFICATION_HIDE
    };
}