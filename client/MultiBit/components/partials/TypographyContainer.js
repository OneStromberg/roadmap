import React from 'react';
import {Component, View, Container, Header, Text, Title} from 'components';
import TypographyItem from './TypographyItem';


class TypographyContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>01</Text>
                    <Text> Typography</Text>
                </Header>
                <View className="typography-container">
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="16px" letterSpacing="0" color="#BBBED7" title={<Title className="text-primary">Text Primary</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="14px" letterSpacing="0" color="#BBBED7" title={<Title className="text-secondary">Text Secondary</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="13px" letterSpacing="0" color="#BBBED7" title={<Title className="text-meta-primary">Text Meta Primary</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="12px" letterSpacing="0" color="#9DA0BA" title={<Title className="text-meta-secondary">Text Meta Secondary</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="11px" letterSpacing="0" color="#BBBED7" title={<Title className="text-title-primary">Text Title Primary</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="10px" letterSpacing="0" color="#9DA0BA" title={<Title className="text-title-secondary">Text Title Secondary</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="12px" letterSpacing="0" color="#F5667F" title={<Title className="text-input-error">Text Input Error</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="14px" letterSpacing="0" color="#9DA0BA" title={<Title className="text-input-secondary">Text Input Secondary</Title>}/>
                </View>
            </Container>
        )
    }
}


export default TypographyContainer;