import React from 'react';
import ReactDOM from 'react-dom';
import mutlibitRoute from './routes/mutlibit';
import { Application } from 'components';
import reducers from './reducers';

import './../../common/styles/styles.less';
import './../common/styles/styles.less';
import './styles/multibit.less';

const App = (props) => {
    return (
        <Application reducers={reducers}>
            {mutlibitRoute}
        </Application>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
