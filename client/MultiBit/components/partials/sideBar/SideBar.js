import React from 'react';
import {Component, View, Text, Title, Label, Button, Image} from 'components';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

const menuItemsArray = [
	{src: "./../../assets/multibit/img/overview.svg", title: "Overview"},
	{src: "./../../assets/multibit/img/transact.svg", title: "Transact"},
	{src: "./../../assets/multibit/img/exchange.svg", title: "Exchange"},
	{src: "./../../assets/multibit/img/contacts.svg", title: "Contacts"},
	{src: "./../../assets/multibit/img/history.svg", title: "History"},
	{src: "./../../assets/multibit/img/settings.svg", title: "Settings"},
	{src: "./../../assets/multibit/img/help.svg", title: "Help"}
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

