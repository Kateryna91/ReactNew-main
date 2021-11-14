import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './store';

import {authUser} from './actions/auth';

const token = localStorage.authToken;

if(token) {
  store.dispatch(authUser(token));
}

ReactDOM.render(
  <Provider store={store}>
     <App />
     </Provider>,
  
  
  document.getElementById('root')
);

