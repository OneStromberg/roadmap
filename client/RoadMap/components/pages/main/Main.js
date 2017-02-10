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
                        <Header>
                            <Text> 01 </Text>
                            <Text> Color Palette </Text>
                        </Header>
                        <ColorPaletteContainer />
                    </Container>
                </Page>
            </View>
        )
    };
};

export default ComponentsApp;