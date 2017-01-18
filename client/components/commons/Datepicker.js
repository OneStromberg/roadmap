import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { common } from './../../actions';

import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import Button from './Button';

class Datepicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: 'startDate',
            startDate: null,
            endDate: null
        };
        this.monthFormat = props.monthFormat || 'MMMM YYYY';
        this.displayFormat = props.displayFormat || 'DD.MM.YYYY';
        this.numberOfMonths = props.numberOfMonths || 1;
        this.enableOutsideDays = props.enableOutsideDays || false;
        this.keepOpenOnDateSelect = props.keepOpenOnDateSelect || true;
        this.startDatePlaceholderText = props.startDatePlaceholderText || moment().format('DD.MM.YYYY');
        this.endDatePlaceholderText = props.endDatePlaceholderText || moment().format('DD.MM.YYYY');
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        
    }
    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
    }
    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }
    onApply(){
        this.props.onApply([{value:{
                startDate: this.state.startDate,
                endDate: this.state.endDate
        }}]);        
    }
    isOutsideRange(day){
        return false;
    }
    render() {
        const { focusedInput, startDate, endDate } = this.state;
        return (
            <div className="datepicker">
                <DateRangePicker
                  {...this.props}
                  onDatesChange={this.onDatesChange}
                  onFocusChange={this.onFocusChange}
                  focusedInput={focusedInput}
                  startDate={startDate}
                  endDate={endDate}
                  monthFormat={this.monthFormat}
                  displayFormat={this.displayFormat}
                  numberOfMonths={this.numberOfMonths}
                  enableOutsideDays={this.enableOutsideDays}
                  startDatePlaceholderText={this.startDatePlaceholderText}
                  endDatePlaceholderText={this.endDatePlaceholderText}
                  keepOpenOnDateSelect={this.keepOpenOnDateSelect}
                  isOutsideRange={this.isOutsideRange}
                  navPrev={<Arrow />}          
                  navNext={<Arrow />}
              />
              <Button className="btn-2" onClick={this.onApply.bind(this)}>Apply</Button>
            </div>
        );
    }
}
class Arrow extends React.Component {
    render() {
        return (
            <div><img src="./assets/img/arrow.svg" alt="arrow" /></div>
        );
    }
};

export default Datepicker;