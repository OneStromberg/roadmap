import { ActionType } from './../../constants';

export function setTimeFrame(date) {
    return {
        type: ActionType.common.DateList.SET_TIME_FRAME,
        date: date
    };
}