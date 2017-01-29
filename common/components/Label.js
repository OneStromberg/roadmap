import React from 'react';

class Label extends React.Component {
    render(){
        return(
            <span {...this.props} className={"uk-label-warning"}/>
        )
    }
}

export default Label;