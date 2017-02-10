import React from 'react';
import {AppBar, Container, View} from './components';

class RoadmapAppBar {
    render(){
        return(
            <AppBar>
                <Container>
                    <View>
                        <Title></Title>
                        <Subtitle></Subtitle>
                    </View>
                </Container>
                <AppBarLogo />
            </AppBar>
            
        )
    }
}

export default RoadmapAppBar;