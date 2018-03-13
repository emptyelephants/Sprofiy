import {combineReducers} from 'redux'
import RecipeReducer from './recipes'
import ControlsReducer from './controls'
import recipeFormReducer from './recipeForm'
export default combineReducers({
  recipes:RecipeReducer,
  controls:ControlsReducer,
  recipeForm:recipeFormReducer

})
