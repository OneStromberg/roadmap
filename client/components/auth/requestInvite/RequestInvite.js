import React from 'react';
import { connect } from 'react-redux';
import ValidatorTextField from './../../commons/ValidatorTextField';
import { Link } from 'react-router';
import PreloaderButton from './../../commons/PreloaderButton';
import FormGroup from './../../commons/FormGroup';
import BlockWrapper from './../../commons/BlockWrapper';
import FormWrap, {Form_1} from './../../commons/FormWrap';
import Logo from './../../commons/Logo';
import Label from './../../commons/Label';
import { StatusType } from './../../../constants';
import { validateEmail, validateRegion, validateTitle, validateName, checkValid } from './../../../utils/';
import { bindActionCreators } from 'redux';
import { auth } from './../../../actions';
import Image from './../../commons/Image';
import RandomImage from '../../commons/RandomImage';

class RequestInvite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:false
        };
    }
    _tryAuthenticate()
    {
        if (this.state.validated) {
            this.props.sendInvite({email:this.state.value});
        }
    }
    _onSubmit(e){
        e.preventDefault();
    }
    _onChangeEmail(valid, value){
        this.setState({
            validated: valid,
            value: value
        });
    }
    render() {
        return (
            <BlockWrapper>
                <FormWrap>
                    <Logo>
                        <RandomImage images={["assets/img/avatars/avatar-1.svg","assets/img/avatars/avatar-1.svg","assets/img/avatars/avatar-1.svg","assets/img/avatars/avatar-1.svg","assets/img/avatars/avatar-1.svg"]} />
                    </Logo>
                    <FormGroup center>
                        <Label center className="lbl-1">Request an invite to Curaytor</Label>
                    </FormGroup>
                    <Form_1>
                        <FormGroup>
                            <Label uppercase className="lbl-6">Email</Label>
                            <ValidatorTextField placeholder="ex. Sam Johanson" validate={validateEmail} errorText="You have entered an invalid email address!" onChange={this._onChangeEmail.bind(this)}/>
                        </FormGroup>
                        <PreloaderButton 
                            onClick={this._tryAuthenticate.bind(this)} 
                            status={this.props.status ? this.props.status : StatusType.NORMAL}>REQUEST AN INVITE
                        </PreloaderButton>
                    </Form_1>
                </FormWrap>
            </BlockWrapper>
        );
    }
}

const stateMap = (state, props, ownProps) => {
    return {
        user: state.user,
        status: state.application.status
    };
};

function mapDispatchToProps(dispatch) {
    return  bindActionCreators(auth, dispatch); 
    
};

export default connect(stateMap,mapDispatchToProps)(RequestInvite);
