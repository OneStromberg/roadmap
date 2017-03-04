import React from 'react';
import {Component, View, Text, Title, Label, Button} from 'components';
import DropdownItem from './DropdownItem';

class Dropdown extends Component {
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
    render(){
        return(
            <View className={"dropdown-container " + this.props.className + (this.state.listVisible ? " show" : "")}>
				<View className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show.bind(this)}>
					<Text>{this.props.title}</Text>
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

export default Dropdown;