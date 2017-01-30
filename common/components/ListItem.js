import React from 'react';
import Component from './Component';

class ListItem extends Component {
    render(){
        return(
            <li {...this.props} className={"list-item " + this.getClassName(this.props)} />
        )
    }
}

export default ListItem;