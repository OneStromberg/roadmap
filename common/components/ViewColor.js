import React from 'react';
import Component from './Component';

class ViewColor extends Component {
    getStyle(){
        if (this.props.colors && this.props.colors.length > 1 ) {
            return {backgroundImage: `linear-gradient(147deg) ${this.props.color[0]} 0% ${this.props.color[1]} 100%`};
        } else if (this.props.colors && this.props.colors.length == 1) {
            return {
                backgroundColor:this.props.colors[0] 
            }
        }
    }
    render(){
        console.log("get style", this.getStyle());
        return (
            <div style={this.getStyle()} className={this.getClassName(this.props) + "view-color"}>
                {this.props.children}
            </div>
        )
    }
}

export default ViewColor;
