import React from 'react';

import moment from 'moment';

import ButtonList from './../../commons/ButtonList';
import Datepicker from './../../commons/Datepicker';
import Button from './../../commons/Button';
import FilterList from './../../commons/FilterList';

class DateList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleCalendar: false
        };
    }
    componentWillUnmount(){
        this.setState({toggleCalendar: false});
    }
    toggleCalendar(){
        this.setState({toggleCalendar: !this.state.toggleCalendar});
    }
    onDatepickerApply(args){
        this.props.onApply(args);
        this.setState({toggleCalendar: false});
    }
    render() {
        return (
            <div>
                <FilterList list={this.props.list} onApply={this.props.onApply}>
                    <Button className="btn-7" onClick={this.toggleCalendar.bind(this)}>Custom range</Button>
                </FilterList>
                {
                    this.state.toggleCalendar ? <Datepicker onApply={this.onDatepickerApply.bind(this)}/> : null
                }
            </div>
        );
    }
}

export default DateList;