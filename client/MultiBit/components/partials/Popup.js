import React from 'react';
import {Component, Container, View, Text, Title} from 'components';

class Popup extends Component {
    render(){
        return(
            <View className={"popup " + this.props.className}>
				<View className="popup-content">
					{this.props.children}
				</View>
				<View className="popup-layer" />
            </View>
        )
    }
}

export default Popup;