import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as appBar from './../../../actions/auth/appBar';

import AppBar from './AppBar';
import AppBarLogoWrap from './../../commons/AppbarLogoWrap';
import Image from './../../commons/Image';
import Label from './../../commons/Label';
import AppBarNavMenu, {AppBarNavMenuItem} from './../../commons/AppBarNavMenu';
import AppBarSubNavMenu from './../../commons/AppBarSubNavMenu';
import AppBarProfile from './../../commons/AppBarProfile';
import AppBarButtons from './../../commons/AppBarButtons';

//Add className="status-active" to DropDownMenu for adding red point
class AnalyticsAppBar extends React.Component {
    constructor(props){
        super(props);
    }
    getAppBarButtons(){
        if (this.props && this.props.items) {
            return this.props.items.map((data, i) => <AppBarButtons index={0} items={data} key={i} />);
        }

        return null;
    }
    render() {
        return(
            <AppBar className="search-container">
                <AppBarNavMenu className="main-menu">
                    <Logo />
                    <SearchBlock />
                </AppBarNavMenu>
                <AppBarProfile/>
            </AppBar>
        );
    };
};
const Logo = (props) =>{
    return(
            <Link to="/" className="lbl-6 logo">Curaytor</Link>
    )
}
const SearchBlock = (props) =>{
    return(
        <div className="search-block">
            <Image src="assets/img/loop.svg" alt="loop" />
            <input placeholder="Type to search something…" />
        </div>
    )
}
const stateMap = (state, props, ownProps) => {
    return {
        enabled: state.application.appBar.enabled,
        items: state.application.appBar.items
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(appBar, dispatch);
};

export default connect(stateMap, mapDispatchToProps)(AnalyticsAppBar);