import { ActionType, StatusType } from './../../constants';
import moment from 'moment';
let today = moment().add(0,'days');
let arr = [
    {
        id: 1,
        name:'Today',
        value:{
            startDate:today,
            endDate: null
        }
    },
    {
        id: 2,
        name:'Last 3 days',
        value:{
            startDate: today,
            endDate: moment().add(-3,'days')
        }
    },
    {
        id: 3,
        name:'Last 7 days',
        value:{
            startDate:today,
            endDate: moment().add(-7,'days')
        }
    },
    {
        id: 4,
        name:'This Month',
        value:{
            startDate:today,
            endDate: moment().add(0,'M').endOf('M')
        }
    },
    {
        id: 5,
        name:'Last 3 Month',
        value:{
            startDate:today,
            endDate: moment().add(-3,'M')
        }
    }
];

let initialState = {
    list: arr,
    date: null
};

export default function detelist(state = initialState, action) {
	switch(action.type){
		case ActionType.common.DateList.SET_TIME_FRAME:
        if(action.date) {
			return Object.assign({}, state, {date: action.date});
        }
		default:
			return state;
  	}  

    return state;
};