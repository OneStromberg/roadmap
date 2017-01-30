import React from 'react';
import View from './View';

class Image extends React.Component {
    getClassName(props){
        return (props.className || ""); 
    }
    render(){
        return(
            <View>
                <img 
                    src="./../../assets/img/logo.png" 
                    className={this.getClassName(this.props)} 
                    alt={this.props.alt || ""} 
                    />
            </View>
        )
    }
}

export default Image;