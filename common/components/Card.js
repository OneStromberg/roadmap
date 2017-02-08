import React from 'react';
import Component from './Component';
import Section from './Section';
import View from './View';

class Card extends Component {
    render(){
        return(
            <Section>
                <View className={"uk-card uk-card-default " + this.getClassName(this.props)}>
                    {this.props.header}
                    <View className={"uk-card-body " + this.getClassName(this.props)}>
                        {this.props.children}
                    </View>
                </View>
            </Section>
        )
    }
}

Card.propTypes = {
    header: React.PropTypes.element
}

export default Card;