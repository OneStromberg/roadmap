import React from 'react';
import {Component, Title, View} from 'components';
import TypographicCard from './TypographyCard';

class TypographyContainer extends Component {
    render(){
        return(
            <View className="typography-container">
                <TypographicCard title={<Title className="lbl-1"> Open Sans Semibold </Title>}/>
                <TypographicCard title={<Title className="lbl-2"> Open Sans Regular </Title>}/>
                <TypographicCard title={<Title className="lbl-3"> Open Sans Semibold</Title>}/>
                <TypographicCard title={<Title className="lbl-4"> Open Sans Regular </Title>}/>
                <TypographicCard title={<Title className="lbl-5"> Open Sans Regular </Title>}/>
                <TypographicCard title={<Title className="lbl-6"> Open Sans Semibold </Title>}/>
                <TypographicCard title={<Title className="lbl-7"> Open Sans Regular </Title>}/>
                <TypographicCard title={<Title className="lbl-8"> Open Sans Light </Title>}/>
                <TypographicCard title={<Title className="lbl-9"> Open Sans Regular </Title>}/>
            </View>
        )
    }
}

export default TypographyContainer; 
