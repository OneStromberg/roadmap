import React from 'react';
import ReactDOM from 'react-dom';
import styleRoute from './components';
import { Application } from 'components';
import reducers from './reducers';

require('./../../common/styles/style.less');
require('./../../common/styles/common.sass');

const App = (props) => {
    return (
        <Application reducers={reducers}>
            {styleRoute}
        </Application>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
