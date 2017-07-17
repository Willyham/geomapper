import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {responsiveStoreEnhancer} from 'redux-responsive';

import rootReducer from '../reducers/root';

export default function configureStore(initialState) {
  const enhancers = compose(
    responsiveStoreEnhancer,
    applyMiddleware(thunk, promiseMiddleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return createStore(rootReducer, initialState, enhancers);
}
