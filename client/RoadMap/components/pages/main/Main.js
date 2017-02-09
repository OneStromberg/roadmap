import React from 'react';
import {CardImage, CardButton, CardInput, CardLabel, CardLink, CardList, CardText, CardFooter, CardDivider, CardForm, CardModal, CardImageButton, CardRadio, CardTab} from './../../../../common/components';
import {View, Button, Footer, Image, Input, Label, Link, List, ListItem, Text, Component, Header, Card, Divider, Checkbox, Radio, Modal, ImageButton, CardHeader} from 'components';
import ColourPaletteContainer from './../../partials/ColourPaletteContainer';

class ComponentsApp extends React.Component {
    render(){
        return(
            <View>
                <ColourPaletteContainer />
            </View>
        )
    };
};

export default ComponentsApp;