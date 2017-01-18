import React from 'react';

import FilterItems from './FilterItems';

import {OVERVIEW, GROUP_REPORT, ASSET_REPORT, TILE_OVERVIEW, ASSET_ANALYTICS} from './../../../constants/routes';
import {RegionListId, RoutesListId, TimeFrameId, WSHLFrameId, SwitchListId, AddNewFilterId} from './../../../constants/filterItemId';

class FilterList extends React.Component{
    constructor(props) {
        super(props);
    }
    getFilterRequrementIds(location){
        switch(location){
            case "/":
            case OVERVIEW:
                return RegionListId | RoutesListId | SwitchListId | AddNewFilterId;
            case GROUP_REPORT:
                return RegionListId | RoutesListId | TimeFrameId | WSHLFrameId | SwitchListId | AddNewFilterId;
            case ASSET_REPORT:
                return RegionListId | RoutesListId | TimeFrameId | WSHLFrameId | SwitchListId | AddNewFilterId;
            case TILE_OVERVIEW:
                return RegionListId | RoutesListId | TimeFrameId | WSHLFrameId | SwitchListId | AddNewFilterId;
            case ASSET_ANALYTICS:
                return RegionListId | RoutesListId | TimeFrameId | WSHLFrameId | SwitchListId | AddNewFilterId;
        }
    }
    render(){
        return <FilterItems requiredIds={this.getFilterRequrementIds(location.pathname)}/>;
    }
}

export default FilterList;