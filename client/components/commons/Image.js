import React from 'react';

class Image extends React.Component {
    _getClassName(){
        return this.props.className ? this.props.className : "";
    }
    _getSrcName(){
        return this.props.src ? this.props.src : "";
    }
    _getAltName(){
        return this.props.alt ? this.props.alt : "";
    }
    render() {
        return (
             <img src={this._getSrcName()} className={this._getClassName()} alt={this._getAltName()}/>
        );
    }
};
export default Image;