import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';
import thunk from 'redux-thunk';

const prepareStore = (reducers) => {
    return createStore(reducers,  window.__PRELOADED_STATE__, applyMiddleware(thunk));
}

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