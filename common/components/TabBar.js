import React from 'react';
import Component from './Component';
import TabButton from './TabButton';

const TabClassPrefix = "uk-tab";

class TabBar extends Component {
    getClassName(props){
        var newProps = "";
        newProps += props.className + ' ' ;
        newProps += (props.hasOwnProperty('center') && props.center !== false) ? "uk-flex-center " : "";
        return newProps
    }
    onItemClick(){

    }
    render(){
        return(
            <ul className={this.getClassName(this.props) + TabClassPrefix}>
                {
                    React.Children.map(this.props.children, (child, i) => {
                        return (<TabButton active={this.props.activeItem === i ? true : false} onItemClick={this.onItemClick.bind(this)}>
                                    {child}
                                </TabButton>);
                    })
                }
            </ul>
        )
    }
}

export default TabBar;