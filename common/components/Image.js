import React from 'react';
import View from './View';
import Component from './Component';

class Image extends Component {
    render(){
        return(
            <View>
                <img 
                    src={this.props.src}
                    className={"image " + this.getClassName(this.props)} 
                    alt={this.props.alt || ""} 
                    />
            </View>
        )
    }
}

export default Image;