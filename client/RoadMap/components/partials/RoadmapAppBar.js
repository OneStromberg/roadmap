import React from 'react';
import {AppBar, Component, Container, Title, Subtitle, View} from 'components';
import AppBarLogo from './../../../common/components/AppBarLogo';

class RoadmapAppBar extends Component {
    render(){
        return(
            <AppBar className="styleguide-header">
                <Container className="appbar-container">
                    <View className="appbar-view">
                        <Title className="appbar-title">
                            RoadMap
                        </Title>
                        <Subtitle className="appbar-subtitle">
                            UI Styleguide
                        </Subtitle>
                    </View>
                </Container>
                <AppBarLogo />
            </AppBar>          
        )
    }
}

export default RoadmapAppBar;