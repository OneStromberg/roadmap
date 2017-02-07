import React from 'react';
import CardImage from './../../partials/CardImage';
import CardButton from './../../partials/CardButton';
import CardInput from './../../partials/CardInput';
import CardLabel from './../../partials/CardLabel';
import CardLink from './../../partials/CardLink';
import CardList from './../../partials/CardList';
import CardText from './../../partials/CardText';
import CardFooter from './../../partials/CardFooter';
import CardDivider from './../../partials/CardDivider';
import CardForm from './../../partials/CardForm';
import CardModal from './../../partials/CardModal';
import CardImageButton from './../../partials/CardImageButton';
import CardRadio from './../../partials/CardRadio';
import CardProfile from './../../partials/CardProfile';
import CardTab from './../../partials/CardTab';

import {View, Button, Footer, Image, Input, Label, Link, List, ListItem, Text, Component, Header, Card, Divider, Checkbox, Radio, Modal, ImageButton, CardHeader} from 'components';

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