import {combineReducers} from 'redux'
import RecipeReducer from './recipes'
import ControlsReducer from './controls'
import {reducer as formReducer} from 'redux-form';
export default combineReducers({
  recipes:RecipeReducer,
  controls:ControlsReducer,
  form:formReducer

})
