import React from 'react';
import {Component, View} from 'components';
import TypographyCard from './TypographyCard';


class TypographyContainer extends Component {
    render(){
        return(
            <View className={"typography-container " + this.getClassName(this.props)}>
                <TypographyCard />
            </View>
        )
    }
}

export default TypographyContainer;