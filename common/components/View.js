import React from 'react';
import Component from './Component';

class View extends Component {
    render(){
        return (
            <div className={"view uk-container " + this.getClassName(this.props)}>
                {this.props.children}
            </div>
        )
    }
}

export default View;