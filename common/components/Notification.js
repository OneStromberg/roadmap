import React from 'react';
import Component from './Component';
import Image from './Image';
import Text from './Text';
import View from './View';


class Notification extends Component {
    render(){
        return(
            <View className={this.getClassName(this.props)}>
                <Image className="notification-icon" src={this.props.src}/>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

export default Notification;