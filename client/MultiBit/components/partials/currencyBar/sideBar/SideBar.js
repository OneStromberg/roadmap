import React from 'react';
import {Component, View, Text, Title, Label, Button, Image, List, ListItem} from 'components';
import SideBarItem from './SideBarItem';

class SidebarMenu extends Component {
	
    render(){
        return(
		   <List className="sidebar-menu">
               {this.props.menuItemsArray.map((item, i) => <SideBarItem src={item.src} key={i} text={item.title}/>)}
           </List>
        )
    }
}

export default SidebarMenu;