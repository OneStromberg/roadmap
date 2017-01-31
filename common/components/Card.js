import React from 'react';
import Component from './Component';
import View from './View';

class Card extends Component {
    render(){
        return(
            <View className="card">
                {this.props.children} 
            </View>
        )
    }
}

export default Card;