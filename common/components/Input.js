import React from 'react';

class Input extends React.Component {
    render(){
        return (
            <input {...this.props} className="uk-input" placeholder="Input" />
        )
    }
}

export default Input;