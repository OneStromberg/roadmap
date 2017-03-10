import React from 'react';
import {Component, View, Text, Title, Label, Button, Image} from 'components';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';
import { Routes } from './../../../constants'
const menuItemsArray = [
	{src: "./../../assets/multibit/img/overview.svg", 	title: "Overview", 	url: Routes.OVERVIEW},
	{src: "./../../assets/multibit/img/transact.svg", 	title: "Transact",	url: Routes.TRANSACT},
	{src: "./../../assets/multibit/img/exchange.svg", 	title: "Exchange", 	url: Routes.EXCHANGE},
	{src: "./../../assets/multibit/img/contacts.svg", 	title: "Contacts",	url: Routes.CONTACTS},
	{src: "./../../assets/multibit/img/history.svg", 	title: "History",	url: Routes.HISTORY},
	{src: "./../../assets/multibit/img/settings.svg", 	title: "Settings",	url: Routes.SETTINGS},
	{src: "./../../assets/multibit/img/help.svg", 		title: "Help",		url: Routes.HELP}
];

class SideBar extends Component {
	
    render(){
        return(
            <View className="sidebar-wrapper">
				<SidebarHeader>
					<Image src={this.props.src} alt={this.props.title} />
					<Text>{this.props.title}</Text>
					<Label>{this.props.costs}</Label>
				</SidebarHeader>
				<SidebarMenu menuItemsArray={menuItemsArray} />
			</View>
        )
    }
}

export default SideBar;

