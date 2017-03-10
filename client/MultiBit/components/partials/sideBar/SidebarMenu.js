import React from 'react';
import {Component, View, Text, Title, Label, Button, Image, List, ListItem} from 'components';
import SidebarMenuItem from './SidebarMenuItem';

class SidebarMenu extends Component {
	
    render(){
        return(
		   <List className="sidebar-menu">
               {this.props.menuItemsArray.map((item, i) => <SidebarMenuItem 
                                                                url={item.url}
                                                                src={item.src} 
                                                                key={i} 
                                                                text={item.title}/>)}
           </List>
        )
    }
}

export default SidebarMenu;