import React from 'react';
import Component from './Component';
import View from './View';

class Modal extends Component {
    render(){
        return(
            <View className="uk-modal-body">
                <View className="uk-modal-dialog">
                    children
                </View>
            </View>
        )
    }
}

export default Modal;