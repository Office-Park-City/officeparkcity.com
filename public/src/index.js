import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/AppContainer';
import { configureStore } from './store';
import historyListener from './historyListener';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';

// Initialize store
const store = configureStore();
const mountApp = document.getElementById('root');

// Initial AJAX requests
const history = historyListener(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  mountApp
);

registerServiceWorker();
