import React from 'react';
import {Component, View, Text, Title, Label, Button, Image, List, ListItem} from 'components';
import { browserHistory } from 'react-router'

class SidebarMenuItem extends Component {
	onClick(){
        browserHistory.push(this.props.url);
    }
    render(){
        return(
		   <ListItem onClick={this.onClick.bind(this)} className="sidebar-menu-item">
				<Image src={this.props.src} />
				<Text>{this.props.text}</Text>
			</ListItem>
        )
    }
}

export default SidebarMenuItem;

