import React from 'react';

class Image extends React.Component {
    getClassName(props){
        return (props.className || ""); 
    }
    render(){
        return(
            <img src={'./../../public/assets/img/logo'} className={this.getClassName(this.props)} alt={this.props.alt || ""} />
        )
    }
}

export default Image;