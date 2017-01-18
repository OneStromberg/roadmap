import Button from './Button';
import ButtonList,{ButtonItem} from './ButtonList';
import React from 'react';

class FilterList extends React.Component {
    render() {
        return (
            <div className="filter-button-list">
                {
                    this.props.list ? 
                        <ButtonList list={this.props.list} onApply={this.props.onApply}>
                        {React.Children.map(this.props.children, (child) => {
                            return <ButtonItem {...child.props}>{child}</ButtonItem>;
                        })}
                        </ButtonList> : null
                }
            </div>
        );
    }
}

export default FilterList;