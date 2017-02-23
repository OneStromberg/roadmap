import React from 'react';
import {Component, View, Label, Image, Button} from 'components';

class ExpandButton extends Component {
    render(){
        return(
			<View onClick={this.props.onClick} className="expand-heading">
				<Image src="./../../assets/multibit/img/folder.svg" alt="alt" />
				<Label>{this.props.title}</Label>
				<Button className="expand-button"></Button>
			</View>	
        )
    }
}

export default ExpandButton;