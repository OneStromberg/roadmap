import React from 'react';
import {Component, Header} from 'components';

class SidebarHeader extends Component {
	
    render(){
        return(
           <Header className="sidebar-header">
		   		{this.props.children}
			</Header>
        )
    }
}

export default SidebarHeader;