import React from 'react';
import {Container, Header, Label, Text, View} from 'components';
import {ColorPaletteContainer} from './../../partials/';
import Page from './../../../../common/components/Page';
import RoadmapAppBar from './../../partials/RoadmapAppBar';
import TypographyContainer from './../../partials/TypographyContainer';

class ComponentsApp extends React.Component {
    render(){
        return(
            <View>
                <RoadmapAppBar />
                <Page>
                    <Container>
                        <Header  className="uk-heading-line">
                            <Label> 01.Color Palette </Label>
                        </Header>
                        <ColorPaletteContainer />
                    </Container>
                </Page>
                <Page>
                    <Container>
                        <Header className="uk-heading-line">
                            <Label> 02. Typography </Label>
                        </Header>
                        <TypographyContainer />
                    </Container>
                </Page>
                <Page>
                    <Container>
                        <Header className="uk-heading-line">
                            <Label> 03. Forms </Label>
                        </Header>
                    </Container>
                </Page>
            </View>
        )
    }
}

export default ComponentsApp;