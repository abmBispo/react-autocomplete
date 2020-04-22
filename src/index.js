// Redux
import {Provider} from 'react-redux';
import store from './store';
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './components/App';

ReactDOM.render((
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
), document.getElementById('root'));
