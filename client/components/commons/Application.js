import React from 'react';

import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import { prepareStore } from './../../utils/store';

const Application = (props) => {

    const store = prepareStore(props.reducers);
    const history = syncHistoryWithStore(browserHistory, store);

    return(
        <Provider store={store}>
            <Router history={history}>
                {props.children}
            </Router>
        </Provider>
    );
};

export default Application;