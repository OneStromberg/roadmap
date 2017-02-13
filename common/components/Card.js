import React from 'react';
import Component from './Component';
import View from './View';

class Card extends Component {
    render(){
        return(
            <View className={"uk-card uk-card-default " + this.getClassName(this.props)}>
                {this.props.header}
                <View className="uk-card-body">
                    {this.props.children}
                </View>
            </View>
        )
    }
}

Card.propTypes = {
    header: React.PropTypes.element
}

export default Card;