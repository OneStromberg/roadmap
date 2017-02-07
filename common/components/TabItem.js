import React from 'react';
import Component from './Component';

class TabItem extends Component {
    onItemClicked(){
        this.props.onItemClicked();
    }
    render() {
        return React.Children.only(this.props.children);
    }
}

export default TabItem;