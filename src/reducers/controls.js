import{HANDLE_NEW_RECIPE_MODAL,HANDLE_VIEW_RECIPE_MODAL} from '../actions/controls'
const initialState = {
  isCreatingRecipe:false,
  isViewingRecipe:false,
  currentRecipe:undefined

}

export default function ControlsReducer(state = initialState,action){
  switch (action.type) {
    case HANDLE_NEW_RECIPE_MODAL:
      return{
        isViewingRecipe:false,
        isCreatingRecipe:!state.isCreatingRecipe
      }
    case HANDLE_VIEW_RECIPE_MODAL:
      return{
        isCreatingRecipe:false,
        isViewingRecipe:!state.isViewingRecipe,
        currentRecipe:action.recipeIndex
      }
    default:
      return state

  }
}
