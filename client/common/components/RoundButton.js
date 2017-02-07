import React from 'react';
import Component from './../../../common/components/Component';
import Button from './../../../common/components/Button';

class RoundButton extends Component {
    render(){
        return(
            <Button secondary>
                {this.props.children}
            </Button>
        )
    }
}

export default RoundButton;