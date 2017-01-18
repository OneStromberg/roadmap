import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ValidatorTextField from './../../commons/ValidatorTextField';
import { validateEmail, checkValid } from './../../../utils/';
import PreloaderButton from './../../commons/PreloaderButton';
import FormGroup from './../../commons/FormGroup';
import BlockWrapper from './../../commons/BlockWrapper';
import FormWrap, {Form_1} from './../../commons/FormWrap';
import Label from './../../commons/Label';
import Image from './../../commons/Image';
import Logo from './../../commons/Logo';
import { StatusType } from './../../../constants';
import { bindActionCreators } from 'redux';
import { auth } from './../../../actions';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:false,
        };
    }
    onChangeEmail(valid,value){
        this.props.saveFieldValue('email', value);
        this.setState({'email':valid});
    }
    tryAuthenticate()
    {
        let validated = checkValid(this.state);
        if (validated) {
            this.props.restorePassword(this.props.data);
        }
    }
    onSubmit(e){
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
                        <Label center className="lbl-1">Forgot Password?</Label>
                    </FormGroup>
                    <FormGroup center>
                        <Label center className="lbl-3">Please enter the email address you use to log in
                            and we'll send you a reminder.</Label>
                    </FormGroup>
                    <Form_1>
                        <FormGroup>
                            <Label uppercase className="lbl-6">Email</Label>
                            <ValidatorTextField placeholder="ex. Sam Johanson" validate={validateEmail} errorText="You have entered an invalid email address!" onChange={this.onChangeEmail.bind(this)}/>
                        </FormGroup>
                        <PreloaderButton className="btn-1" onClick={this.tryAuthenticate.bind(this)} status={this.props.status ? this.props.status : StatusType.NORMAL}>SEND LOG IN LINK</PreloaderButton>
                    </Form_1>
                    <FormGroup center>
                        <Label center className="lbl-6">If you still need help, contact <Link> Zajno Support.  </Link></Label>
                    </FormGroup>
                </FormWrap>
            </BlockWrapper>
        );
    }
}

const stateMap = (state, props, ownProps) => {
    return {
        user: state.user,
    };
};

function mapDispatchToProps(dispatch) {
    return  bindActionCreators(auth, dispatch); 
    
};

export default connect(stateMap,mapDispatchToProps)(ForgotPassword);
