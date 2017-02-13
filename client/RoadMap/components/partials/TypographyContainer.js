import React from 'react';
import {Component, Title, View} from 'components';
import TypographicCard from './TypographyCard';

class TypographyContainer extends Component {
    render(){
        return(
            <View className="typography-container">
                <TypographicCard title={<Title className="lbl-1">Open Sans Regular</Title>}/>
                <TypographicCard title={<Title className="lbl-2"></Title>}/>
                <TypographicCard title={<Title className="lbl-3"></Title>}/>
                <TypographicCard title={<Title className="lbl-4"></Title>}/>
                <TypographicCard title={<Title className="lbl-5"></Title>}/>
                <TypographicCard title={<Title className="lbl-6"></Title>}/>
                <TypographicCard title={<Title className="lbl-7"></Title>}/>
                <TypographicCard title={<Title className="lbl-8"></Title>}/>
                <TypographicCard title={<Title className="lbl-9"></Title>}/>
            </View>
        )
    }
}

export default TypographyContainer; 
