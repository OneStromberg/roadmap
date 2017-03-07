import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MultibitWrapper from './../components/templates/MultibitWrapper';
import Login from './../components/pages/login';
import Pincode from './../components/pages/Pincode';

import { Routes } from './../constants';

const styleRoute = (
     <Route path="/" component={MultibitWrapper}>
        <IndexRoute component={Pincode} />
        <Route path={Routes.LOGIN} component={Login} />
        <Route path={Routes.PINCODE} component={Pincode} />
     </Route>
);

export default styleRoute;