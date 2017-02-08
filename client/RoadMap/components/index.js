import React from 'react';
import {Route, IndexRoute} from 'react-router';
import GuideLineWrapper from './templates/GuideLineWrapper';
import Main from './pages/main';

import { Routes } from './../constants';

const styleRoute = (
     <Route path="/" component={GuideLineWrapper}>
        <IndexRoute component={Main} />
        <Route path={Routes.MAIN} component={Main} />
     </Route>
);

export default styleRoute;