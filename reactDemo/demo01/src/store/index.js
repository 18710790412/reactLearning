import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import createSageMiddleWare from 'redux-saga';
import mySaga from './sagas';
const sagaMiddleWare = createSageMiddleWare();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancer(applyMiddleware(thunk));
// const enhancer = composeEnhancer(applyMiddleware(sagaMiddleWare));
const store = createStore(
    reducer,
    enhancer
);
// sagaMiddleWare.run(mySaga);
export default store;