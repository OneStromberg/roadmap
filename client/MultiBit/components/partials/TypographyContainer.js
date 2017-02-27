import React from 'react';
import {Component, View, Container, Header, Text, Title} from 'components';
import TypographyItem from './TypographyItem';


class TypographyContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>02</Text>
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
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="14px" letterSpacing="0" color="#9DA0BA" title={<Title className="text-input">Text Input Secondary</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="14px" letterSpacing="0" color="#9DA0BA" title={<Title className="label-primary">Label Primary</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="13px" letterSpacing="0" color="#BBBED7" title={<Title className="label-simple">Label Simple</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="10px" letterSpacing="0" color="#9DA0BA" title={<Title className="label-secondary">Label Secondary</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="20px" letterSpacing="0" color="#9DA0BA" title={<Title className="dropdown-label">Dropdown Label</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="12px" letterSpacing="0" color="#F5667F" title={<Title className="label-error">Label Error</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="12px" letterSpacing="0" color="#729FEE" title={<Title className="link-label">Link Label</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Medium" fontSize="13px" letterSpacing="0" color="#9DA0BA" title={<Title className="profile-label">Profile Label</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Medium" fontSize="13px" letterSpacing="0" color="#FFFFFF" title={<Title className="login-button-label">Login Button Label</Title>}/>
                    <TypographyItem fontFamily="SF UI Display Regular" fontSize="24px" letterSpacing="0" color="#FFC681" title={<Title className="currency-label">Currency Label</Title>}/>
                </View>
            </Container>
        )
    }
}


export default TypographyContainer;