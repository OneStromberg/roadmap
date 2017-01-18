import React from 'react';


class SubBar extends React.Component{
    _getClassName(){
        return "sub-bar " + (this.props.className ? this.props.className : "");
    }
    render(){
        return(
            <div className={this._getClassName()} style={{backgroundColor:"#fff"}}>
                {this.props.children}
            </div>
        );
    }
}

export default SubBar;