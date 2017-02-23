import React from 'react';
import {Component, View, Text, Label, ListItem, Button, Link} from 'components';
import ExpandButton from './ExpandButton';
import ExpandContent from './ExpandContent';

class Expand extends Component {
	constructor(props) {
        super(props);
        this.state = {active: false};
    }
	Open() {
		let condition = this.state.active;
        this.setState({active: !condition});
    }
    render(){
        return(
			<ListItem className={this.state.active ? "expand-item active" : "expand-item"}>
				<ExpandButton onClick={this.Open.bind(this)} title={this.props.title}/>
				<ExpandContent>
					<Text>{this.props.text}</Text>
					<Link href={this.props.href}>{this.props.href}</Link>
				</ExpandContent>
			</ListItem>
        )
    }
}

export default Expand;