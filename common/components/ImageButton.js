import React from 'react';
import Button from './Button';
import Image from './Image';
import Component from './Component';

class ImageButton extends Component {
    render(){
        return(
            <Button className={this.getClassName(this.props)}>
                <Image src={this.props.src} alt={this.props.alt || ""} />
            </Button>
        )
    }
}

export default ImageButton;