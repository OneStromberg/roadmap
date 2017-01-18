import React from 'react';

class ApplicationWrapper extends React.Component {
    render() {
        return(
            <div className="wrapper-main">{this.props.children}</div>
        );
    };
};

export default ApplicationWrapper;

