import React from 'react';
import ReactDOM from 'react-dom';
// Provider must wrap the entire application
import { Provider } from 'react-redux';
// store must wrap the entire aplication
import { createStore } from 'redux';
// We must also import our reducers
import reducer from './store/reducer';
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
