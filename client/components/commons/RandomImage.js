import React from 'react';
import Image from './Image';


class SubBar extends React.Component{
    _getImage(images){
        return images[Math.floor(Math.random()*images.length)];
    }
    render(){
        return <Image src={this._getImage(this.props.images)} />
    }
}

export default SubBar;