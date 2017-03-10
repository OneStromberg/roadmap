import React from 'react';
import {Component, View, Text, Title, Label, Button, Image, List, ListItem} from 'components';

class SidebarMenuItem extends Component {
	
    render(){
        return(
		   <ListItem className="sidebar-menu-item">
				<Image src={this.props.src} />
				<Text>{this.props.text}</Text>
			</ListItem>
        )
    }
}

export default SidebarMenuItem;

