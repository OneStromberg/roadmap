import React from 'react';
import Component from './Component';
import View from './View';
import Label from './Label';

class Checkbox extends Component {
    render(){
        return(
            <label className="control-checkbox">{this.props.children}
                <input className={"uk-checkbox " + this.getClassName(this.props)} type="checkbox" />
                <View className="control__indicator"></View>
            </label>
        )
    }
}

export default Checkbox;