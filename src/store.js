import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index'
import RecipeReducer from './reducers/recipes'
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
console.log('from store',store.getState())

export default store;
