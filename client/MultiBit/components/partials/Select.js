import React from 'react';
import {Component, View, Text, Title, Label, Button} from 'components';
import DropdownItem from './DropdownItem';
import _ from 'lodash';

class Select extends Component {
	constructor(props){
		super();
		this.state = {
			listVisible: false,
			display: "",
			selectedId: props.selected
		};
	}
	select(id) {
		this.show();
		this.setState({selectedId: id});
	}
	show() {
		let condition = this.state.listVisible;
		this.setState({ listVisible: !condition });
	}
	renderListItems() {
		return this.props.list.map((item, i) => (
			<DropdownItem key={i} onClick={this.select.bind(this)} id={i} item={item} />
		));
	}
	getClassName(props){
		return _.isNil(props.className) ? "dropdown-primary" : props.className;
	}
    render(){
        return(
			<View className={"dropdown-container " + this.getClassName(this.props) + (this.state.listVisible ? " show" : "")}>
				<View className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show.bind(this)}>
					<Text>{this.props.list[this.state.selectedId].name}</Text>
					<i className="angle-down"></i>
				</View>
				<View className="dropdown-list">
					<View>
						{this.renderListItems()}
					</View>
				</View>
			</View>
        )
    }
}

export default Select;