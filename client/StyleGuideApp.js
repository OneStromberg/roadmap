import React from 'react';
import ReactDOM from 'react-dom';
import StyleGuide from './components/guide';

require('./styles/common.sass');
require('./styles/guide.sass');

ReactDOM.render(<StyleGuide />, document.getElementById('root'));