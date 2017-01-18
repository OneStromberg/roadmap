import React from 'react';

class BlockWrapper extends React.Component {
    _getClassName(){
        return "wrapper-block " +
            (this.props.className ? this.props.className : "") 
    }
    render() {
        return (
            <div className={this._getClassName()} >
                    {this.props.children}
            </div>
        );
    }
};
export default BlockWrapper;