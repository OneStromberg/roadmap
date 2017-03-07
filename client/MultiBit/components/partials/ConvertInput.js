import React from 'react';
import { Component, Input, Label, Text, View } from 'components';

class ConvertInput extends Component {
    getClassName(props){
        var newProps = "input-empty input-exchange";
        newProps += (props.hasOwnProperty('error') && props.error !== false) ? "input-error " : "";
        newProps += props.className + ' ';
		return newProps;
	}
    render() {
        return (
            <Label className="forms-label"> 
                <Text className="in-currency">BTC</Text>
                <Input type="text" className={this.getClassName(this.props)} value={this.props.value} />
                <View>
                    <Text className="input-exchange-out">0.00</Text>
                    <Text className="out-currency">USD</Text>
                </View>
            </Label>
        );
    }
}

export default ConvertInput;