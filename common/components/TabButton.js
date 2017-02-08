import React from 'react';
import Component from './Component';
import Link from './Link';

class TabButton extends Component {
    getClassName(props){
        return props.active ? "uk-active" : "";
    }
    onItemClick(){
        this.props.onItemClick();
    }
    render(){
        return(
            <li className={this.getClassName(this.props)}>
                <Link onClick={this.onItemClick.bind(this)}>{this.props.children}</Link>
            </li>
        )
    }
}

export default TabButton;