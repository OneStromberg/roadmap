import { ActionType, StatusType } from './../../constants';
var menu_items = [
    [{
        title:"Overview",
        link:'overview',
    },{
        title:"Tile overview",
        link:'tile-overview',
    },{
        title:"Group Report",
        link:'group-report',
    },{
        title:"Asset Report",
        link:'asset-report',
    }
    ],
    [{
        title:"Asset Analytics",
        link:'asset-analytics',
    },{
        title:"Analytics",
        link:'',
    }
    ],
    [{
        title:"Data",
        link:'',
    },{
        title:"Data",
        link:'',
    }
    ],
    [{
        title:"ALERTS",
        link:'',
    },{
        title:"ALERTS",
        link:'',
    }
    ]
];

let initialState = {
    enabled:true,
    items: menu_items
};

export default function appBar(state = initialState, action) {
    switch(action.type){
        default:
            return state;
            break;
    }
    return state;
};