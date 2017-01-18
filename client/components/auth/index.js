import React from 'react';
import AuthWrapper from './AuthWrapper';
import { connect } from 'react-redux';

import { StatusType } from './../../constants';

import Login from './login';
import ForgotPassword from './forgotPassword';
import CompleteRegistration from './completeRegistration';
import RequestInvite from './requestInvite';
import RestorePassword from './restorePassword';
import Dashboard from './dashboard';
import PersonalCard from './personalCard';
import NoMatch from './noMatch';

import AnalyticsAppBar from './appBar/AnalyticsAppBar';
import {Route, IndexRoute, Redirect} from 'react-router';

const authRoute = <Route path="/" component={AuthWrapper}>
                    <IndexRoute components={{main:Login}}/>
                    <Route path="login" components={{main:Login, appBar: null}}/>
                    <Route path="forgot-password" components={{main:ForgotPassword, appBar: null}}/>
                    <Route path="request-invite" components={{main:RequestInvite, appBar: null}}/>
                    <Route path="restore-password" components={{main:RestorePassword, appBar: null}}/>
                    <Route path="dashboard" components={{main:Dashboard, appBar: AnalyticsAppBar}}/>
                    <Route path="personal-card" components={{main:PersonalCard, appBar: AnalyticsAppBar}}/>
                    <Route path="*" components={{main:NoMatch, appBar: null}}/>
                  </Route>

export default authRoute;