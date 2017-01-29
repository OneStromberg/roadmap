import React from 'react';
import ReactDOM from 'react-dom';
import StyleGuide from './StyleGuide';

require('./../common/styles/style.less');
require('styles/common.sass');
require('./styles/styleGuide.sass');

ReactDOM.render(<StyleGuide />, document.getElementById('root'));