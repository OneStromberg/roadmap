import React from 'react';
import Component from './Component';

class ViewColor extends Component {
    render(){
        return (
            <div style={{background: this.props.background}} className={this.getClassName(this.props) + " view-color"}>
                {this.props.children}
            </div>
        )
    }
}

export default ViewColor;
