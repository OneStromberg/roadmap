import React from 'react';
import ImageButton from './ImageButton';
import Component from './Component';

class FacebookButton extends Component {
    render(){
        return(
            <ImageButton className="facebook" src="./assets/img/fbb.png"/>
        )
    }
}

export default FacebookButton;