import React from 'react';
import { Component, View } from 'components';

class MultibitWrapper extends Component {
    render(){
        return(
            <View className="multibit" {...this.props}/>
        )
    }
}

export default MultibitWrapper;