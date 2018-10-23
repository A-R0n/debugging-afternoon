import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));

// import { createStore } from 'redux';
// import reducer from './ducks/reducer';
// export default createStore( reducer );