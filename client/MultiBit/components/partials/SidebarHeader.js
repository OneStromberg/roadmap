import React from 'react';
import {Component, View, Text, Title, Label, Button, Image} from 'components';

class SidebarHeader extends Component {
	
    render(){
        return(
           <View className="sidebar-header">
		   		{this.props.children}
			</View>
        )
    }
}

export default SidebarHeader;