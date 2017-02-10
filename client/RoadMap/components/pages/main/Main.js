import React from 'react';
import {AppBar, Container, Header, Text, View} from 'components';
import {ColorPaletteContainer} from './../../partials/';
import Page from './../../../../common/components/Page';

class ComponentsApp extends React.Component {
    render(){
        return(
            <View>
                <AppBar />
                <Page>
                    <Container>
                        <Header  className="uk-heading-line">
                            <Text> 01.Color Palette </Text>
                        </Header>
                        <ColorPaletteContainer />
                    </Container>
                </Page>
            </View>
        )
    };
};

export default ComponentsApp;