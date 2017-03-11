import React from 'react';
import Topbar from './Topbar';
import { View, Component, Title } from 'components';
import Button from "./Button";

class AppWindowControls extends Component {
    render() {
        return (
            <Topbar>
                <View className="topbar-round-buttons-container">
                    <Button className="topbar-round-buttons close" />
                    <Button className="topbar-round-buttons minify" />
                    <Button className="topbar-round-buttons expand" />
                </View>
                <View>
                    {this.props.children}
                </View>
            </Topbar>
        );
    }
}

export default AppWindowControls;