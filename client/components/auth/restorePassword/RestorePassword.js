import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ValidatorTextField from './../../commons/ValidatorTextField';
import PreloaderButton from './../../commons/PreloaderButton';
import FormGroup from './../../commons/FormGroup';
import BlockWrapper from './../../commons/BlockWrapper';
import FormWrap, {Form_1} from './../../commons/FormWrap';
import Label from './../../commons/Label';
import { validateEmail, validatePassword, checkValid } from './../../../utils/';
import { StatusType } from './../../../constants';
import { bindActionCreators } from 'redux';
import { auth } from './../../../actions';
import Logo from './../../commons/Logo';
import Image from './../../commons/Image';

class RestorePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password:false,
            repeatPassword:false
        };
    }
    _onChangePassword(valid,value){
        this.props.saveFieldValue('password', value);
        this.setState({'password': value});
    }
    _onChangeRepeatPassword(valid,value){
        this.props.saveFieldValue('repeatPassword', value);
        this.setState({'repeatPassword': value});
    }
    _tryAuthenticate()
    {   
        if (this.state.password === this.state.repeatPassword){
            this.props.changePassword({password:this.state.password});
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
                        <Image src="assets/img/avatars/avatar-1.svg" alt="logo"/>
                    </Logo>
                    <FormGroup center>
                        <Label center className="lbl-1">Restore Password</Label>
                    </FormGroup>
                    <Form_1>
                        <FormGroup>
                            <Label uppercase className="lbl-6">Email</Label>
                            <ValidatorTextField placeholder="ex. Sam Johanson" disabled value={this.props.email} errorText="You have entered an invalid email address!"/>
                        </FormGroup>
                        <FormGroup>
                            <Label uppercase className="lbl-6">Password</Label>
                            <ValidatorTextField placeholder="****" validate={validatePassword} errorText="Password has to be over 7 characters" onChange={this._onChangePassword.bind(this)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label uppercase className="lbl-6">Repeat Password</Label>
                            <ValidatorTextField placeholder="****" validate={validatePassword} errorText="Password has to be over 7 characters" onChange={this._onChangeRepeatPassword.bind(this)}/>
                        </FormGroup>
                            <PreloaderButton onClick={this._tryAuthenticate.bind(this)} status={this.props.status ? this.props.status : StatusType.NORMAL}>RESTORE PASSWORD</PreloaderButton>
                    </Form_1>
                    <FormGroup center>
                        <Label className="lbl-6">By signing up, you agree to
                            the Zajno <Link to="">Terms of Service</Link> and <Link to="">Policies.</Link>
                        </Label>
                    </FormGroup>
                </FormWrap>
            </BlockWrapper>
        );
    }
}

const stateMap = (state, props, ownProps) => {
    return {
        user: state.user,
        status: state.application.status,
        email: state.application.query ? state.application.query.email : null
    };
};

function mapDispatchToProps(dispatch) {
    return  bindActionCreators(auth, dispatch); 
};

export default connect(stateMap,mapDispatchToProps)(RestorePassword);