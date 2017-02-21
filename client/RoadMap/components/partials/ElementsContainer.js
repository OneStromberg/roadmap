import React from 'react';
import {Component, Title, View} from 'components';
import ElementsCard from './ElementsCard';

class ElementsContainer extends Component {
    render(){
        return(
            <View className="elements-container">
                <ElementsCard />
                <ElementsCard />
                <ElementsCard />
                <ElementsCard />
            </View>
        )
    }
}

export default ElementsContainer; 