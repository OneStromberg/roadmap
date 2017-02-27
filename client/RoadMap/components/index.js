import React from 'react';
import {Route, IndexRoute} from 'react-router';
import GuideLineWrapper from './templates/GuideLineWrapper';
import Main from './pages/main';
import Login from './pages/login';

import { Routes } from './../constants';

const styleRoute = (
     <Route path="/" component={Login}>
        <IndexRoute component={Main} />
        <Route path={Routes.MAIN} component={Main} />
        <Route path={Routes.LOGIN} component={Login} />
     </Route>
);

export default styleRoute;