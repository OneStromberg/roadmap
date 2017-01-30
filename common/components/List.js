import React from 'react';
import Component from './Component';

class List extends Component {
    render(){
        return(
            <ul {...this.props} className={"uk-list " + this.getClassName(this.props)} />
        )
    }
}

export default List;