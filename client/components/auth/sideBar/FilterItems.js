import React from 'react';

import {RegionListId, RoutesListId, TimeFrameId, WSHLFrameId, SwitchListId, AddNewFilterId} from './../../../constants/filterItemId';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import * as MenuType from './../../../constants/popupType';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { common } from './../../../actions';
import moment from 'moment';

import Label from './../../commons/Label';
import Image from './../../commons/Image';
import DropDownMenu from './../../commons/DropDownMenu';
import ValidatorTextField from './../../commons/ValidatorTextField';
import FormWrap from './../../commons/FormWrap';

class FilterItems extends React.Component {
    getFilterComponents(requiredIds) {
        var result = [];
        
        if (requiredIds & RegionListId) {
            result.push(RegionList({showDropdownMenu:this.props.showDropdownMenu, regions:this.getRegions()}));
        }
        if (requiredIds & RoutesListId) {
            result.push(RoutesList({showDropdownMenu:this.props.showDropdownMenu, routes:this.getRoutes()}));
        }
        if (requiredIds & TimeFrameId) {
            result.push(TimeFrame({showDropdownMenu:this.props.showDropdownMenu, date:this.props.date}));
        }
        if (requiredIds & WSHLFrameId) {
            result.push(WSHLFrame);
        }
        if (requiredIds & SwitchListId) {
            result.push(SwitchList({showDropdownMenu:this.props.showDropdownMenu, switches:this.getSwitch()}));
        }
        if (requiredIds & AddNewFilterId) {
            result.push(AddNewFilter);
        }

        return result;
    }

    getRegions(){
        if(this.props.activeRegions && this.props.activeRegions.length > 0){
            return this.props.activeRegions.length > 1 
                ? this.props.activeRegions.length + ' Regions' 
                : this.props.activeRegions[0].name;
        }
        
        return 'All regions';
    }
    getSwitch(){
        if(this.props.selectedSwitches && this.props.selectedSwitches.length > 0){
            return this.props.selectedSwitches.length > 1 
            ? this.props.selectedSwitches.length + ' Regions' 
            : this.props.selectedSwitches[0].name;
        }

        if(this.props.activeSwitches && this.props.activeSwitches.length !== this.props.switches.length){
            return this.props.activeSwitches.length + ' from ' + this.props.switches.length + ' switches';
        }

        return  'All switches';
    }
    getRoutes(){
        let { activeRoutes, selectedRoutes } = this.props;
        if (activeRoutes && activeRoutes.length > 0){
            if(selectedRoutes && selectedRoutes.length === 1)
                return selectedRoutes[0].name;
            else {
                return activeRoutes.length + ' from ' + this.props.routes.length + ' routes';
            }
        }

        return 'All routes';
    }
    render(){
        return <ListGroup>{this.getFilterComponents(this.props.requiredIds)}</ListGroup>;
    };
}

const RegionList = (props) => <ListGroupItem key="ListGroupItem">
                                <FormWrap onClick={() => {props.showDropdownMenu(MenuType.REGION_LIST);}}>
                                    <Label className="lbl-6">Region</Label>
                                    <Label className="lbl-18">{props.regions}</Label>
                                </FormWrap>                    
                            </ListGroupItem>;

const RoutesList = (props) => <ListGroupItem key="RoutesList">
                                <FormWrap onClick={() => {props.showDropdownMenu(MenuType.ROUTES_LIST);}}>
                                    <Label className="lbl-6">ROUTES</Label>
                                    <Label className="lbl-18">{props.routes}</Label>
                                </FormWrap>   
                            </ListGroupItem>;

const TimeFrame = (props) => <ListGroupItem key="TimeFrame">
                                <FormWrap onClick={() => {props.showDropdownMenu(MenuType.DATE_LIST);}}>
                                    <Label className="lbl-6">TIME FRAME</Label>
                                    <Label className="lbl-18" >
                                        {(props.data && props.data.startDate) ? props.startDate.format('DD.MM.YYYY') : 'Current Condition'} 
                                        {(props.data && props.data.endDate) ? ' - ' + props.endDate.format('DD.MM.YYYY') : null}
                                    </Label>
                                </FormWrap>                    
                            </ListGroupItem>;

const WSHLFrame = <ListGroupItem className="dropdown-filter" key="WSHLFrame">
                    <Label className="lbl-6" disabled>WHSL</Label>
                    <DropDownMenu items={["off", "=", "<", ">"]} index={[0]}/>
                    <ValidatorTextField disabled value="136.06mm"/>
                </ListGroupItem>;

const SwitchList = (props) => <ListGroupItem key="SwitchList">
                                <FormWrap onClick={() => {props.showDropdownMenu(MenuType.SWITCH_LIST);}}>
                                    <Label className="lbl-6">SWITCH RANGE</Label>
                                    <Label className="lbl-18">{props.switches}</Label>
                                </FormWrap>
                            </ListGroupItem>;

const AddNewFilter =  <ListGroupItem key="AddNewFilter">
                            <Label className="lbl-18">+ Add New Filter</Label>
                        </ListGroupItem>;

const stateMap = (state, props, ownProps) => {
    return {
        date: state.datelist.date ? state.datelist.date[0].value : null,
        regions: state.data.regions,
        routes: state.data.routes,
        activeRegions: state.data.activeRegions,
        selectedSwitches: state.data.selectedSwitches,
        activeSwitches: state.data.activeSwitches,
        activeRoutes: state.data.activeRoutes,
        selectedRoutes: state.data.selectedRoutes,
        switches: state.data.switches,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        showDropdownMenu:bindActionCreators(common.sideBar.showDropdownMenu, dispatch)
    };
};

export default connect(stateMap, mapDispatchToProps)(FilterItems);