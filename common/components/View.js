import React from 'react';
import Component from './Component';

class View extends Component {
    render(){
        return (
            <div style={{backgroundColor:this.props.colour}} className={this.getClassName(this.props)}>
                {this.props.children}
            </div>
        )
    }
}

export default View;