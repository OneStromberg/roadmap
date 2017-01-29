import React from 'react';

class Component extends React.Component {
    getClassName(props){
        return (props.className || ""); 
    }
}

export default Component;