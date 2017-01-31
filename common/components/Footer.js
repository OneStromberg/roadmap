import React from 'react';
import Component from './Component';
import View from './View';

class Footer extends Component {
    render(){
        return (
            <View {...this.props} className={"footer " + this.getClassName(this.props)}>
            </View>
        )
    }
}

export default Footer;