import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
//import { createLogger } from 'redux-logger'

import storage from 'redux-persist/lib/storage';

import reducers from '../reducers';

const middlewares = [ReduxThunk];

/*
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
        predicate: (getState, action) =>
            !action.type || !action.type.includes('REACT_NATIVE_ROUTER_FLUX'),
    })
      middlewares.push(logger)
} */


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['FLUX', 'loading'],
  whitelist: ['lends'],
  debounce: 33,
  timeout: 10000,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

export default { store, persistor };
