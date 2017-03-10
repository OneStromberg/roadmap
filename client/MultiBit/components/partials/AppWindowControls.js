import React from 'react';
import { View } from 'components';
import Button from "./Button.js";

class AppWindowControls extends Component {
    render() {
        return (
            <View className="topbar-round-buttons-container">
                <Button className="topbar-round-buttons close" />
                <Button className="topbar-round-buttons minify" />
                <Button className="topbar-round-buttons expand" />
            </View>
        );
    }
}

export default AppWindowControls;