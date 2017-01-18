import React from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';

/* 
* Props:
* items: Array
* title: String
*/
const DropdownFilter = (props) => (
    
    <div className="guide-dropdown-wrap">
        <SplitButton title={props.title} pullLeft className="guide-dropdown-custom">
        {props.items.map((el, index) => <MenuItem eventKey="{index}">{el}</MenuItem>)}
        </SplitButton>
    </div>

);

export default DropdownFilter;

