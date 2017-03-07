import React from 'react';
import ReactDOM from 'react-dom';
import styleGuideRoute from './routes/styleGuide';
import { Application } from 'components';
import reducers from './reducers';

import './../../common/styles/styles.less';
import './../common/styles/styles.less';
import './styles/styles.less';

const App = (props) => {
    return (
        <Application reducers={reducers}>
            {styleGuideRoute}
        </Application>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));