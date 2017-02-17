import React from 'react';
import Component from './Component';

class Switch extends Component {
    render(){
        return(
            <label className="switch">
                <input type="checkbox"></input>
                <div className="slider circle"></div>
            </label>
        )
    }
}

export default Switch;