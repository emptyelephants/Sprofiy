import {ADD_RECIPE_STEP} from '../actions/recipeForm'
const initialState = {
  totalSteps: 1
}

export default function recipeFormReducer(state=initialState,action){
  switch (action.type) {
    case ADD_RECIPE_STEP:
      return{
        ...state,
        totalSteps:state.totalSteps+1
      }
    default:
      return state

  }

}
