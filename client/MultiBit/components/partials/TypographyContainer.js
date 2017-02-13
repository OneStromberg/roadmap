import React from 'react';
import {Component, View, Container, Header, Text} from 'components';
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
                    <TypographyCard className="text-primary" />
                </View>
            </Container>
        )
    }
}

export default TypographyContainer;