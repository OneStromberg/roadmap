import React from 'react';
import Component from './Component';
import View from './View';

class Round extends Component {
    render(){
        return(
            <View>
                <View className="round" alt={this.props.alt || ""} />
            </View>
        )
    }
}

export default Round;