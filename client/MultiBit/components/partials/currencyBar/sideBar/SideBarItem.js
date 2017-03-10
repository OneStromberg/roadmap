import React from 'react';
import {Component, View, Text, Title, Label, Button, Image, List, ListItem} from 'components';

class SideBarItem extends Component {
    render(){
        return(
		   <ListItem className="currency-bar-item">
                <View>
				    <Image src={this.props.src} />
                </View>
                <View>
				    <Text>{this.props.title}</Text>
                    <Text>{this.props.value}</Text>
                </View>
			</ListItem>
        )
    }
}

export default SideBarItem;

