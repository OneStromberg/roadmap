import React from 'react';
import View from './View';

class Footer extends React.Component {
    render(){
        return (
            <View className={"footer " + this.getClassName(this.props)}>By clicking the button above, you agreed to the Terms of Service Xiew our Privacy Policy</View>
        )
    }
}

export default Footer;