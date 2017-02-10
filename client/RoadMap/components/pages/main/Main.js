import React from 'react';
import {AppBar, View} from 'components';
import {ColorPaletteContainer} from './../../partials/';

class ComponentsApp extends React.Component {
    render(){
        return(
            <View>
                <AppBar />
                <ColorPaletteContainer />
            </View>
        )
    };
};

export default ComponentsApp;