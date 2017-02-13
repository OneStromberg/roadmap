import React from 'react';
import {Component, View} from 'components';
import TypographicCard from './TypographyCard';

class TypographyContainer extends Component {
    render(){
        return(
            <View className="typography-container">
                <TypographicCard title={<Title className="lbl-1"></Title>}/>
                <TypographicCard title={<Title className="lbl-2"></Title>}/>
                <TypographicCard title={<Title className="lbl-3"></Title>}/>
            </View>
        )
    }
}

export default TypographyContainer; 
