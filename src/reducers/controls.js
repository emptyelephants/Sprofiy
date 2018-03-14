import{HANDLE_NEW_RECIPE_MODAL} from '../actions/controls'
const initialState = {
  isCreatingRecipe:false,
  isAddingStep:false,

}

export default function ControlsReducer(state = initialState,action){
  switch (action.type) {
    case HANDLE_NEW_RECIPE_MODAL:
      return{
        ...state,
        isCreatingRecipe:!state.isCreatingRecipe
      }
    default:
      return state

  }
}
