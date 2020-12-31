import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

export default (initialState = {}) => {
  const middlewares = [thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })) ||
    compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers),
  );

  return store;
};
