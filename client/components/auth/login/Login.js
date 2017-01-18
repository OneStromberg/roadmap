import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ValidatorTextField from './../../commons/ValidatorTextField';
import PreloaderButton from './../../commons/PreloaderButton';
import FormGroup from './../../commons/FormGroup';
import BlockWrapper from './../../commons/BlockWrapper';
import FormWrap, {Form_1} from './../../commons/FormWrap';
import Label from './../../commons/Label';
import Logo from './../../commons/Logo';
import Image from './../../commons/Image';
import Checkbox from './../../commons/Checkbox';
import Notification from './../../commons/Notification';
import { validateEmail, validatePassword, checkValid } from './../../../utils';
import { StatusType } from './../../../constants';
import { bindActionCreators } from 'redux';
import { auth } from './../../../actions';
import RandomImage from '../../commons/RandomImage';

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(firebase.auth(), firebase.user);
        this.state = {
            email: props.data ? props.data.email : null,
            password: false
        };
    }
    _onChangePassword(valid, value){
        this.props.saveFieldValue('password', value);
        this.setState({'password':value});
    }
    _onChangeEmail(valid,value){
        this.props.saveFieldValue('email', value);
        this.setState({'email':value});
    }
    _tryAuthenticate()
    {
        let validated = checkValid(this.state);
        if (validated) {
            this.props.authenticate({email:this.state.email, password:this.state.password});
        }
    }
    _onSubmit(e){
        e.preventDefault();
    }
    render() {
        return (
            <BlockWrapper>
                <FormWrap>
                    <Logo>
                        <RandomImage images={["assets/img/avatars/avatar-1.svg","assets/img/avatars/avatar-1.svg","assets/img/avatars/avatar-1.svg","assets/img/avatars/avatar-1.svg","assets/img/avatars/avatar-1.svg"]} />
                    </Logo>
                    <FormGroup center>
                        <Label center className="lbl-1 db">Login</Label>
                        <Label center className="lbl-6 db">We keep sharing the designs</Label>
                    </FormGroup>
                    <Form_1>
                        <FormGroup>
                            <Label className="lbl-6">login</Label>
                            <ValidatorTextField placeholder="ex. sam.johanson@zajno.de"
                                validate={validateEmail} 
                                value={this.state.email}
                                errorText="Invalid email address" 
                                onChange={this._onChangeEmail.bind(this)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label className="lbl-6">password</Label>
                            <ValidatorTextField placeholder="****" 
                                validate={validatePassword} 
                                errorText="Password has to be over 7 characters" 
                                onChange={this._onChangePassword.bind(this)}/>
                        </FormGroup>
                        <FormGroup center>
                            <Label className="lbl-6">
                                <Link to="/forgot-password"onClick={this.props.showForgotPassword}>Forgot password?</Link>
                            </Label>
                        </FormGroup>
                        <PreloaderButton
                            onClick={this._tryAuthenticate.bind(this)} 
                            status={this.props.status ? this.props.status : StatusType.NORMAL}> Login 
                        </PreloaderButton>
                    </Form_1>
                </FormWrap>
            </BlockWrapper>
        );
    }
}

const stateMap = (state, props, ownProps) => {
    console.log('state.application.status', state.application.status);
    return {
        user: state.user,
        status: state.application.status
    };
};

function mapDispatchToProps(dispatch) {
    return  bindActionCreators(auth, dispatch);    
};

export default connect(stateMap,mapDispatchToProps)(Login);
