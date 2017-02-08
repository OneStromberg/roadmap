import React from 'react';
import AppHeader from './../../partials/AppHeader'
import {CardImage, CardButton, CardInput, CardLabel, CardLink, CardList, CardText, CardFooter, CardDivider, CardForm, CardModal, CardImageButton, CardRadio, CardTab} from './../../../../common/components';

import {View, Container, Footer, Image, Input, Label, Link, List, ListItem, Text, Component, Header, Card, Divider, Checkbox, Radio, Modal, ImageButton, CardHeader} from 'components';

class ComponentsApp extends Component {
    render(){
        return(
            <View>
                <AppHeader />
                <Container>
                    <CardHeader />
                    <CardTab />
                    <CardImage />
                    <CardForm />
                    <CardDivider />
                    <CardButton />
                    <CardInput />
                    <CardModal />
                    <CardRadio />
                    <CardImageButton />
                    <CardLabel />
                    <CardLink />
                    <CardList />
                    <CardText />
                    <CardFooter />
                </Container>
            </View>
        )
    };
};

export default ComponentsApp;