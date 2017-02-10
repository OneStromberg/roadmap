import React from 'react';
import {AppHeader, View} from 'components';
import {ColorPaletteContainer} from './../../partials/';

class ComponentsApp extends React.Component {
    render(){
        return(
            <View>
                <AppHeader />
                <ColorPaletteContainer />
            </View>
        )
    };
};

export default ComponentsApp;