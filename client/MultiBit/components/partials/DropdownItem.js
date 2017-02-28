import React from 'react';
import {Component, View, Text, Checkbox} from 'components';

class DropdownItem extends Component {
    render(){
        return(
            <div className={this.props.className} onClick={() => this.props.onClick(this.props.id)}>
				<Checkbox>{this.props.item.name}</Checkbox>
                <Text>{this.props.item.name}</Text>
			</div>
        )
    }	
}

export default DropdownItem;

