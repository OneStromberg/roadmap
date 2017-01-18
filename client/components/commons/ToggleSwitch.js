import React from 'react';
import Label from './Label';

/**
 *	props
 * 	@props.label : string
 *  @props.positionRight : boolean
 */
const ToggleSwitch = (props) => {
	return (
		<Label className={props.positionRight ? 'toggle toggle--right' : 'toggle'} >
			<p>{props.label}</p>
			<span className="switch">
			  <input type="checkbox"/>
			  <div className="slider round"></div>
			</span>
		</Label>
	);
};

export default ToggleSwitch;