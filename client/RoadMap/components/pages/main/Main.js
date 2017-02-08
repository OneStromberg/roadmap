import React from 'react';

import {CardImage, CardButton, CardInput, CardLabel, CardLink, CardList, CardText, CardFooter, CardDivider, CardForm, CardModal, CardImageButton, CardRadio, CardTab} from './../../../../common/components';

import {View, Button, Footer, Image, Input, Label, Link, List, ListItem, Text, Component, Header, Card, Divider, Checkbox, Radio, Modal, ImageButton, CardHeader} from 'components';

import CardProfile from './../../partials/CardProfile';

class ComponentsApp extends React.Component {
    render(){
        return(
            <View className="uk-container">
                <CardProfile />
                <CardTab />
                <CardHeader />
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
            </View>
        )
    };
};

export default ComponentsApp;