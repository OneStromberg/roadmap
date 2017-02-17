import React from 'react';
import Component from './Component';
import View from './View';

class Checkbox extends Component {
    render(){
        return(
            <input className={"uk-checkbox " + this.getClassName(this.props)} type="checkbox" checked={this.props.checked}
            onChange={this.props.onChange}/>
        )
    }
}

export default Checkbox;