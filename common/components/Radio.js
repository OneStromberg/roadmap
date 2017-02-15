import React from 'react';
import Component from './Component';
import View from './View';

class Radio extends Component {
    render(){
        return(
            <input className={"uk-radio " + this.getClassName(this.props)} 
                   type="radio" 
                   name={this.props.radioButtonGroup}
                   checked={this.props.checked ? this.props.checked : null} />
        )
    }
}

export default Radio;