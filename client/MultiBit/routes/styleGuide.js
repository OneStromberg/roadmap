import React from 'react';
import {Route, IndexRoute} from 'react-router';
import GuideLineWrapper from './../components/templates/GuideLineWrapper';
import Main from './../components/pages/main/Main';

import { Routes } from './../constants';

const styleRoute = (
     <Route path="/" component={GuideLineWrapper}>
        <IndexRoute component={Main} />
        <Route path={Routes.MAIN} component={Main} />
     </Route>
);

export default styleRoute;