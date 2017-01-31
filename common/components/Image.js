import React from 'react';
import View from './View';
import Component from './Component';

class Image extends Component {
    getClassName(props){
        return (props.className || ""); 
    }
    render(){
        return(
            <View>
                <img 
                    src="./../../assets/img/logo.png"
                    className={"image " + this.getClassName(this.props)} 
                    alt={this.props.alt || ""} 
                    />
            </View>
        )
    }
}

export default Image;