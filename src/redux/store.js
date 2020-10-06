import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development'){
  middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);
