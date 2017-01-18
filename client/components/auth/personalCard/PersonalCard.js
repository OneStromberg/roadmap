import React from 'react';
import ValidatorTextField from './../../commons/ValidatorTextField';
import FormGroup from './../../commons/FormGroup';
import Label from './../../commons/Label';
import { validateEmail, validateName } from './../../../utils';
import { Scrollbars } from 'react-custom-scrollbars';
import PreloaderButton from './../../commons/PreloaderButton';
import { auth } from './../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Image from './../../commons/Image';

class PersonalCard extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps){
        this.setState(Object.assign({}, this.state, this.setUserState(nextProps)));
    }
    setUserState(props){
        let { firstname, lastname, email, phone, city, street, position, uid, avatarURL } = props.user;
        return {
            user:{
                avatarURL:avatarURL,
                uid:uid,
                firstname:firstname, 
                lastname:lastname, 
                email:email, 
                phone:phone, 
                city:city, 
                street:street, 
                position:position
            }
        };
    }
    fileLoadHandler(evt){
         var file = evt.target.files[0];
         var metadata = {
            'contentType': file.type
        };
        this.props.uploadAvatar({uid:this.props.user.uid, file:file, metadata:metadata});
    }
    changeField(key, value){
        var user = {};
        user[key] = value;
        user = Object.assign({}, this.state.user, user);
        this.setState({user:user});
    }
    onUpdateClick(){
        this.props.updateUserField(this.state.user);
    }
    render() {
        if (!this.state || !this.state.user) {
            return (<div className="personal-card"></div>);
        }

        let { firstname, lastname, email, phone, city, street, position, avatarURL } = this.state.user;
        return(
            <div className="personal-card">
            <Scrollbars 
                autoHeight
                autoHeight
                autoHeightMin={0}
                universal
                renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                renderView={props => <div {...props} className=""/>}>
                <div className="image-block" >
                    <Image src={avatarURL} rounded alt="avatar"/>
                    <div className="fileupload">
                        <Label className="lbl-button">Upload</Label>
                        <input type="file" id="file" name="file" onChange={this.fileLoadHandler.bind(this)}/>
                    </div>
                </div>
                <div className="half">
                    <FormGroup >
                        <Label className="lbl-6">first name</Label>
                        <ValidatorTextField placeholder="****"
                            value={firstname || ""}
                            onChange={function(v, value){this.changeField('firstname', value)}.bind(this)} 
                            errorText="Name has to be over 7 characters" />

                        <Label className="lbl-6">last name</Label>
                        <ValidatorTextField placeholder="****"
                            value={lastname || ""}
                            onChange={function(v, value){this.changeField('lastname', value)}.bind(this)} 
                            errorText="Password has to be over 7 characters" />

                        <Label className="lbl-6">email</Label>
                        <ValidatorTextField placeholder="****"
                            value={email || ""}
                            enable={false}
                            errorText="Password has to be over 7 characters" />

                        <Label className="lbl-6">phone</Label>
                        <ValidatorTextField placeholder="****" 
                            value={phone || ""}
                            onChange={function(v, value){this.changeField('phone', value)}.bind(this)} 
                            errorText="Password has to be over 7 characters" />

                        <Label className="lbl-6">city</Label>
                        <ValidatorTextField placeholder="****" 
                            value={city || ""}
                            onChange={function(v, value){this.changeField('city', value)}.bind(this)} 
                            errorText="Password has to be over 7 characters" />

                        <PreloaderButton onClick={this.onUpdateClick.bind(this)}
                            status={this.props.status ? this.props.status : StatusType.NORMAL}> Update 
                        </PreloaderButton>
                    </FormGroup>
                </div>
                <div className="half">
                    <FormGroup >
                        <Label className="lbl-6">street</Label>
                        <ValidatorTextField placeholder="****" 
                            value={street || ""}
                            onChange={function(v, value){this.changeField('street', value)}.bind(this)} 
                            errorText="Password has to be over 7 characters" />

                        <Label className="lbl-6">position</Label>
                        <ValidatorTextField placeholder="****" 
                            value={position || ""}
                            onChange={function(v, value){this.changeField('position', value)}.bind(this)} 
                            errorText="Password has to be over 7 characters" />

                        <Label className="lbl-6">creation date</Label>
                        <ValidatorTextField placeholder="****" 
                            errorText="Password has to be over 7 characters" />
                    </FormGroup>
                </div>                
            </Scrollbars>
            </div>
        );
    };
};

const stateMap = (state, props, ownProps) => {
    return {
        user: state.user,
        status: state.application.status
    };
};

function mapDispatchToProps(dispatch) {
    return  bindActionCreators(auth, dispatch); 
};

export default connect(stateMap, mapDispatchToProps)(PersonalCard);