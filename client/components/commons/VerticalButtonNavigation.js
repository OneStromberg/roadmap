import React from 'react';

const VerticalButtonNav = (props) => (
    <div className={props.style + " sub-nav"}>
        <div className="">
            <ul>
                {props.children}
            </ul>
        </div>
    </div>
);

export default VerticalButtonNav;