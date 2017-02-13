import React from 'react';
import {Component, View} from 'components';
import TypographyCard from './TypographyCard';


class TypographyContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>01</Text>
                    <Text> Typography</Text>
                </Header>
                <View className={"typography-container " + this.getClassName(this.props)}>
                    <TypographyCard />
                </View>
            </Container>
        )
    }
}

export default TypographyContainer;