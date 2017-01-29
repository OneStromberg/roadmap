import React from 'react';

class List extends React.Component {
    render(){
        return(
            <ul {...this.props} className={"uk-list uk-list-divider"} />
        )
    }
}

export default List;