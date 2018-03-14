import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index'
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
console.log('from store',store.getState())

export default store;
