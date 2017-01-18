import React from 'react';


class Title extends React.Component{
    _getTitleClassName (){
        return "title " + 
            (this.props.className ? this.props.className : "")
    }
    render(){
        return(
            <div className={this._getTitleClassName()}>
                {this.props.children}
            </div>
        )        
    }
}

export default Title;
