import React from 'react';
import Component from './Component';
import _ from 'lodash';

class ListItem extends Component {
    onClick(){
        if (!_.isNil(this.props.onClick)){
            this.props.onClick();
        }
    }
    render(){
        return(
            <li onClick={this.onClick.bind(this)} {...this.props} className={"list-item " + this.getClassName(this.props)} />
        )
    }
}

export default ListItem;