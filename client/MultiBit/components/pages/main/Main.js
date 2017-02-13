import React from 'react';
import AppBar from './../../partials/MultibitAppBar'
import {Page, CardImage, CardButton, CardInput, CardLabel, CardLink, CardList, CardText, CardFooter, CardDivider, CardForm, CardModal, CardImageButton, CardRadio, CardTab} from './../../../../common/components';
import {View, Container, Footer, Image, Input, Label, Link, List, ListItem, Text, Component, Header, Card, Divider, Checkbox, Radio, Modal, ImageButton, CardHeader} from 'components';
import ColorPaletteContainer from './../../partials/ColorPaletteContainer';
import TypographyContainer from './../../partials/TypographyContainer';

class ComponentsApp extends Component {
    render(){
        return(
            <View>
                <AppBar />
                <Page>
                    <ColorPaletteContainer />
                </Page>
                <Page>
                    <Container>
                        <Header>
                            <Text>01</Text>
                            <Text> Typography</Text>
                        </Header>
                        <TypographyContainer />
                    </Container>
                </Page>
                <Page>
                    <CardText />
                </Page>
                <Page>
                    <CardLabel />
                </Page>
            </View>
        )
    };
};

export default ComponentsApp;