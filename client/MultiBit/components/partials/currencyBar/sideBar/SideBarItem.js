import React from 'react';
import {Component, View, Text, Title, Label, Button, Image, List, ListItem} from 'components';

class SideBarItem extends Component {
    render(){
        return(
		   <ListItem className="currency-bar-item">
				<Image src={this.props.src} />
				<Text>{this.props.title}</Text>
                <Text>{this.props.value}</Text>
			</ListItem>
        )
    }
}

export default SideBarItem;

