import React from 'react';
import Component from './Component';

class Container extends Component {
    render(){
        return (
            <div className={"container " + this.getClassName(this.props)}>
                {this.props.children}
            </div>
        )
    }
}

export default Container;