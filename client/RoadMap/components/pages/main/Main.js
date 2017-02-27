import React from 'react';
import {Container, Header, Label, View} from 'components';
import {ColorPaletteContainer, RoadmapAppBar, TypographyContainer, FormsContainer, ElementsContainer} from './../../partials/';
import Page from './../../../../common/components/Page';

class ComponentsApp extends React.Component {
    render(){
        return(
            <View>
                <RoadmapAppBar />
                <Page>
                    <Container>
                        <Header  className="uk-heading-line">
                            <Label className="header-label"> 01.Color Palette </Label>
                        </Header>
                        <ColorPaletteContainer />
                    </Container>
                </Page>
                <Page>
                    <Container>
                        <Header className="uk-heading-line">
                            <Label className="header-label"> 02. Typography </Label>
                        </Header>
                        <TypographyContainer />
                    </Container>
                </Page>
                <Page>
                    <Container>
                        <Header className="uk-heading-line">
                            <Label className="header-label"> 03. Forms </Label>
                        </Header>
                            <FormsContainer />
                    </Container>
                </Page>
                <Page>
                    <Container>
                        <Header className="uk-heading-line">
                            <Label className="header-label"> 04. Elements </Label>
                        </Header>
                        <ElementsContainer />
                    </Container>
                </Page>
                <Page>
                    <Container>
                        <Header className="uk-heading-line">
                            <Label className="header-label"> 05. Layouts </Label>
                        </Header>
                    </Container>
                </Page>
            </View>
        )
    }
}

export default ComponentsApp;