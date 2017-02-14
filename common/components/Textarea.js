import React from 'react';
import Component from './Component';
import View from './View';

class Textarea extends Component {
    render(){
        return(
            <View>
                <textarea className="uk-textarea" rows="5"></textarea>
            </View>
        )
    }
}

export default Textarea;