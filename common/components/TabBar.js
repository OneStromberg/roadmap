import React from 'react';
import Component from './Component';

class TabBar extends Component {
    render(){
        return(
            <ul className={"uk-tab " + this.getClassName(this.props)}>
                {
                    React.Children.map(this.props.children, child => {
                        return (<li>{child}</li>);
                    })
                }
            </ul>
        )
    }
}

export default TabBar;