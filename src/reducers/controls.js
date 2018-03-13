import{HANDLE_NEW_RECIPE_FORM} from '../actions/controls'
const initialState = {
  isCreatingRecipe:false,
  isAddingStep:false,

}

export default function ControlsReducer(state = initialState,action){
  switch (action.type) {
    case HANDLE_NEW_RECIPE_FORM:
      return{
        ...state,
        isCreatingRecipe:!state.isCreatingRecipe
      }

    default:
      return state

  }
}
