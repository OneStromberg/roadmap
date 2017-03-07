import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MultibitWrapper from './../components/templates/MultibitWrapper';
import Login from './../components/pages/login';

import { Routes } from './../constants';

const styleRoute = (
     <Route path="/" component={MultibitWrapper}>
        <IndexRoute component={Login} />
        <Route path={Routes.LOGIN} component={Login} />
     </Route>
);

export default styleRoute;