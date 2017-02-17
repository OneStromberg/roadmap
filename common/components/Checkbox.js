import React from 'react';
import Component from './Component';
import View from './View';

class Checkbox extends Component {
    render(){
        return(
            <View>
                <input className={"uk-checkbox " + this.getClassName(this.props)} type={this.props.type} />
            </View>
        )
    }
}

export default Checkbox;