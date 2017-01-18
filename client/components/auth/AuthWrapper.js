import React from 'react';
import ComponentWrapper from './../commons/ComponentWrapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { auth } from './../../actions';
import FormWrap from './../commons/FormWrap';
import AuthNotification from './AuthNotification';


class AuthWrapper extends React.Component {
    constructor(props){
        super(props);
        this.checkQuery(props);
    }
    componentWillReceiveProps(nextProps)
    {
        this.checkQuery(nextProps);
    }
    checkQuery(props){
        if (props && props.location && props.location.query) {
            this.props.setQuery(props.location.query);
        }
    }
    getPopupElement(popupType){
        return null;
    }
    render() {
        return (<ComponentWrapper>
                {this.props.appBar}
                {this.props.main}
                <FormWrap>               
                    {(!this.props.popupType || this.props.popupType !== -1) ? this.getPopupElement(this.props.popupType) : null}
                </FormWrap>
                <AuthNotification/>
            </ComponentWrapper>) 
    }
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

export default connect(stateMap, mapDispatchToProps)(AuthWrapper);