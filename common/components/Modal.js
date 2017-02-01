import React from 'react';
import View from './View';

class Modal extends Component {
    render(){
        return(
            <View className="uk-modal-dialog">
                <View className="uk-modal-body">
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export default Modal;