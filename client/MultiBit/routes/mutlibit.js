import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MultibitWrapper from './../components/templates/MultibitWrapper';

import Login from './../components/pages/login';
import Pincode from './../components/pages/Pincode';
import CreateAccKeywordsFilled from './../components/pages/createAccKeywordsFilled';

import Overview from './../components/pages/overview';
import Transact from './../components/pages/transact';
import Exchange from './../components/pages/exchange';
import Contacts from './../components/pages/contacts';
import History  from './../components/pages/history';
import Settings from './../components/pages/settings';
import Help     from './../components/pages/help';

import { Routes } from './../constants';

import AppWindow from './../components/templates/AppWindow';

const styleRoute = (
     <Route path="/" component={MultibitWrapper}>
        <IndexRoute component={Login} />
        <Route path={Routes.LOGIN} component={Login} />
        <Route path={Routes.PINCODE} component={Pincode} />
        <Route component={AppWindow}>
            <Route path={Routes.OVERVIEW}   component={Overview} />
            <Route path={Routes.TRANSACT}   component={Transact} />
            <Route path={Routes.EXCHANGE}   component={Exchange} />
            <Route path={Routes.CONTACTS}   component={Contacts} />
            <Route path={Routes.HISTORY}    component={History} />
            <Route path={Routes.SETTINGS}   component={Settings} />
            <Route path={Routes.HELP}       component={Help} />
        </Route>
        <Route path={Routes.CREATEACC_KEYWORDS_FILLED} component={CreateAccKeywordsFilled} />
     </Route>
);

export default styleRoute;