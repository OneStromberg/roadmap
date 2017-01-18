import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/commons/Application';
import authRoute from './components/auth';
import authReducers from './reducers/auth';

require('./styles/common.sass');
require('./styles/auth.sass');

const MountedApp = (props) => {
    return(
        <Application reducers={authReducers}>
            {authRoute}
        </Application>
    );
};

ReactDOM.render(<MountedApp />, document.getElementById('root'));