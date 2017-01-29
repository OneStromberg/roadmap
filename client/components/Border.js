import React from 'react';
import Image from './Image';

class Border extends React.Component {
    render(){
        return(
            <div className="border">
                <Image src="./assets/img/line.png" />
            </div> 
        )
    }
}

export default Border;