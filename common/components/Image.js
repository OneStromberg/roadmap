import React from 'react';
import Component from './Component';

class Image extends Component {
    render(){
        return(
            <img 
                src={this.props.src}
                className={this.getClassName(this.props)} 
                alt={this.props.alt || ""} 
                />
        )
    }
}

export default Image;