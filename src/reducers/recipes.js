import{FETCH_RECIPE_DATA_ERROR,FETCH_RECIPE_DATA_SUCCESS,FETCH_RECIPE_DATA_LOADING} from '../actions/recipes'
const initialState = {
  loading:false,
  error:null,
  myRecipes:[]
}

export default function RecipeReducer(state = initialState, action){
  switch (action.type) {
    case FETCH_RECIPE_DATA_LOADING:
      return{
        ...state,
        loading:true
      };
    case FETCH_RECIPE_DATA_SUCCESS:
        return{
          ...state,
          myRecipes:action.recipes,
          loading:false
        }
    case FETCH_RECIPE_DATA_ERROR:
      return{
        ...state,
        error:action.error,
        loading:false
      }
    default:
      return state;
  }

}
// FETCH_RECIPE_DATA_SUCCESS
// FETCH_RECIPE_DATA_ERROR
