import React from 'react';

class Link extends React.Component {
    render(){
        return(
            <a {...this.props} className={"uk-link"} />
        )
    }
}

export default Link;