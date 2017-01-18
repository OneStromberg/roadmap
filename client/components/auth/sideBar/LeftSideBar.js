import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { common } from './../../../actions';

import * as MenuType from './../../../constants/popupType';

import LeftSideBar from './../../commons/LeftSideBar';
import FilterHeader from './../../commons/FilterHeader';
import FilterList from './FilterList';
import Button from './../../commons/Button';
import Label from './../../commons/Label';
import SearchResult from './../../commons/SearchResult';
import ValidatorTextField from './../../commons/ValidatorTextField';
import FormWrap from './../../commons/FormWrap';
import { Scrollbars } from 'react-custom-scrollbars';

class SideBarPullLeft extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            className: ""
        };
    }
    onKeyUp(e){
        if(this.props.popupType !== MenuType.SERACH_LIST){
            this.props.showDropdownMenu(MenuType.SERACH_LIST);
        }
        if(e.target.value.length > 0){
            this.setState({className:'focus'});
        }else{
            this.setState({className:''});
        }
        this.props.searchFilter(e.target.value);
    }
    render(){
        return(
            <LeftSideBar>
                <FilterHeader>
                    <Label pullLeft className="lbl-18">FILTERS</Label>
                    <Label className="lbl-7">/{this.props.switches ? this.props.switches.length : null}</Label>
                    <Button className="btn-4"  onClick={() => {this.props.resetFilter();}}>Reset</Button>

                    <form>
                        <input type="text" placeholder="Text filter" className={this.state.className + " form-control" } onChange={(e) => this.onKeyUp(e)} />
                        {
                            this.props.popupType === MenuType.SERACH_LIST ?
                            this.props.list && this.props.list.length > 0 ? <SearchResult list={this.props.list} 
                                                                                          switchClick={this.props.switchClick}
                                                                                          routeClick={this.props.routeClick}
                                                                                          regionClick={this.props.regionClick}
                                                                            /> : null
                            : null
                        }
                    </form>
                </FilterHeader>
                <FilterList location={this.props.location ? this.props.location.pathname : null}/>
                <FormWrap className="sidebar-bottom-wrap">
                    <Label className="lbl-3">Set filters to update data</Label>
                    <Button className="btn-2">Update</Button>
                </FormWrap>
            </LeftSideBar>
        );
    }
}

const stateMap = (state, props, ownProps) => {
    return {
        popupType: state.sideBar.popupType
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators( Object.assign({},common.sideBar,analytics), dispatch);
};

export default connect(stateMap, mapDispatchToProps)(SideBarPullLeft);