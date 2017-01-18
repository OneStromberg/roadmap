import React from 'react';
import Button from './Button';
import ToggleButton from './ToggleButton';

class ToggleButtonList extends React.Component {
    onClick(){
        
    }
    getChecked(data) {
        return this.props.selectedList ? this.props.selectedList.indexOf(data) > -1 : false;
    }
    render()
    {
        return(
            <div>
                {
                    this.props.list ? this.props.list.map((data, i)=> 
                                    <ToggleButton {...this.props} 
                                        checked={this.getChecked(data)} 
                                        key={i}
                                        label={data.name} 
                                        onClick={() => this.props.onApply([data])}
                                    />
                                ) : null
                }
            </div>
        );
    }
};

export default ToggleButtonList;