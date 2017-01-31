import React from 'react';
import CardImage from './components/CardImage';
import CardHeader from './components/CardHeader';
import CardButton from './components/CardButton';
import CardInput from './components/CardInput';
import CardLabel from './components/CardLabel';
import CardLink from './components/CardLink';
import CardList from './components/CardList';
import CardText from './components/CardText';
import CardFooter from './components/CardFooter';

import {View, Button, Footer, Image, Input, Label, Link, List, ListItem, Text, Component, Header, Card} from 'components';

class ComponentsApp extends React.Component{
     constructor(props){
        super(props);
        this.state = {toggle: false};
    }

    someClickHandler(){
        this.setState({toggle: !this.state.toggle});
    }

    render(){
        return(
            <View className="uk-container">
                <CardHeader />
                <CardImage />
                <CardButton />
                <CardInput />
                <CardLabel />
                <CardLink />
                <CardList />
                <CardText />
                <CardFooter />
            </View>)
    };
};

export default ComponentsApp;