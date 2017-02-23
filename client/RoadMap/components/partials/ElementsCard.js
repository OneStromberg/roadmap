import React from 'react';
import {Card, Component, Label, View} from 'components';

class ElementsCard extends Component {
    render(){
        return(
            <Card className="elements-card">
                <View>
                    <Label>{this.props.children}</Label>
                </View>
                <View>
                    <Label>{this.props.children}</Label>
                    <Label>{this.props.children}</Label>
                </View>
            </Card>
        )
    }
}

export default ElementsCard;