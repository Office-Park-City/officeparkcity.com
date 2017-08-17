import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/AppContainer';
import { configureStore } from './store';
import initialDispatch from './initialDispatch';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';

// Initialize store
const store = configureStore();
const mountApp = document.getElementById('root');

// Initial AJAX requests
initialDispatch(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  mountApp
);

registerServiceWorker();