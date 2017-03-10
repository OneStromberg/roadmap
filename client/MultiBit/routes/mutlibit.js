import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MultibitWrapper from './../components/templates/MultibitWrapper';

import Login from './../components/pages/login';
import Pincode from './../components/pages/Pincode';
import CreateAccKeywordsFilled from './../components/pages/createAccKeywordsFilled';
import Overview from './../components/pages/overview';

import { Routes } from './../constants';

import AppWindow from './../components/templates/AppWindow';

const styleRoute = (
     <Route path="/" component={MultibitWrapper}>
        <IndexRoute component={Login} />
        <Route path={Routes.LOGIN} component={Login} />
        <Route path={Routes.PINCODE} component={Pincode} />
        <Route component={AppWindow}>
            <Route path={Routes.OVERVIEW} component={Overview} />
        </Route>
        <Route path={Routes.CREATEACC_KEYWORDS_FILLED} component={CreateAccKeywordsFilled} />
     </Route>
);

export default styleRoute;