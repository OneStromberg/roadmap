import React from 'react';
import Header from './Header';
import Component from './Component';

class CardHeader extends Component {
    render(){
        return(
            <Header className={"uk-card-header " + this.getClassName(this.props)}>{this.props.children}</Header>
        )
    }
}

export default CardHeader;