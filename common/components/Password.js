import React from 'react';
import Component from './Component';
import Input from './Input';

class Password extends Component {
    constructor(props){
        super(props);
        this.state ={
            visible: false
        }
    }
    onChange(e){
        let value = e.target.value;
        if(value.length > 0){
            this.setState({visible: true})
        }else{
            this.setState({visible: false})
        }
    }
    render(){
        return(
            <Input
                className="password"
                type="password" 
                onChange={this.onChange.bind(this)}>
                {this.state.visible ? <img className="show-password-icon" src="assets/roadmap/show-password-icon.png"/> : null}
            </Input>
        )
    }

}

export default Password;