import React from 'react';
import {Component, View, Text, Link} from 'components';

class ExpandContent extends Component {
    render(){
        return(
			<View className="expand-content">
				{this.props.children}
			</View>
        )
    }
}

export default ExpandContent;