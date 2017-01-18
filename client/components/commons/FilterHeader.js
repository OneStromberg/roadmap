import React from 'react';

class FilterHeader extends React.Component{
    render(){
        return(
            <div className="filter-header">
                {this.props.children}
            </div>
        )
    }
}

export default FilterHeader;
