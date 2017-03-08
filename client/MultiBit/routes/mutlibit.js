import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MultibitWrapper from './../components/templates/MultibitWrapper';
import Login from './../components/pages/login';
import Pincode from './../components/pages/Pincode';
import Createacc_keywords_filled from './../components/pages/Createacc_keywords_filled';

import { Routes } from './../constants';

const styleRoute = (
     <Route path="/" component={MultibitWrapper}>
        <IndexRoute component={Createacc_keywords_filled} />
        <Route path={Routes.LOGIN} component={Login} />
        <Route path={Routes.PINCODE} component={Pincode} />
        <Route path={Routes.CREATEACC_KEYWORDS_FILLED} component={Createacc_keywords_filled} />
     </Route>
);

export default styleRoute;