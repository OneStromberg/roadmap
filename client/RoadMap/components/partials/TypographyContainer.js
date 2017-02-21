import React from 'react';
import {Component, Title, View} from 'components';
import TypographyCard from './TypographyCard';

class TypographyContainer extends Component {
    render(){
        return(
            <View className="typography-container">
                <TypographyCard />
                <TypographyCard />
            </View>
        )
    }
}

export default TypographyContainer; 
