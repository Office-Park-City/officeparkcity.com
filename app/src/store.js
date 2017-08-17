import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';
import initialState from './initialState';
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';

export function configureStore() {

  let middleware = [thunk];

  let store = {};
  // const initializedState = loadState() !== undefined ? loadState() : initialState;
  const initializedState = initialState;

  // Load Chrome Dev Tools Extension if DEV mode
  if (process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger');
    middleware.push(logger);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    store = createStore(reducer, initializedState, composeEnhancers(
      applyMiddleware(...middleware)
    ));
  } else {
    store = createStore(reducer, initializedState, applyMiddleware(...middleware));
  }

  // store.subscribe(throttle(() => {
  //   const { cart } = store.getState();
  //   saveState({
  //    cart
  //   });
  // }, 1000));

  return store;
}
