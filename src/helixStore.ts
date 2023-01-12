import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
  } from 'redux';
  import createSagaMiddleware from 'redux-saga';
  
  import reducers from './reducers/rootReducer';
  import rootSaga from './sagas/rootSaga';
  
  const sagaMiddleware = createSagaMiddleware();

  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }


    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const helixStore = createStore(
      reducers,
      composeEnhancers(applyMiddleware(sagaMiddleware)),
    );
  
    sagaMiddleware.run(rootSaga)
  

  
  export default helixStore;