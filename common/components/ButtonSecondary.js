import React from 'react';
import Component from './Component';
import Button from './Button';

class ButtonSecondary extends Component {
    render(){
        return(
            <Button secondary>
                {this.props.children}
            </Button>
        )
    }
}

export default ButtonSecondary;