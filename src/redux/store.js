import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const midddlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  midddlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...midddlewares));
