import React from 'react';

class Logo extends React.Component {
    _getClassName(){
        return "logo-wrap " + (this.props.className ? this.props.className : "");
    }
    render(){
        return (
            <div className={this._getClassName()}>
                {this.props.children}
            </div>
        );
    }
}

export default Logo;