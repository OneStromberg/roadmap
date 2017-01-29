import React from 'react';
import Image from './Image';

class Flag extends React.Component {
    render(){
        return(
            <div className="flag">
                <Image src="./assets/img/flag.png" />
            </div>
        )
    }
}

export default Flag;
