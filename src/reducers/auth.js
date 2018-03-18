import{
    AUTH_REQUEST,
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/auth'


const initialState = {
  loading:false,
  error:null,
  authToken:null,
  currentUser:null
}

export default function authReducer(state =initialState, action){
  switch (action.type) {
    case AUTH_REQUEST:
      return{
        ...state,
        loading:true
      }
    case SET_AUTH_TOKEN:
      return{
        ...state,
        authToken:action.authToken
      }
    case CLEAR_AUTH:
      return{
        ...state,
        authToken:null,
        currentUser:null
      }
    case AUTH_SUCCESS:
      return{
        ...state,
        loading:false,
        currentUser:action.currentUser
      }
    case AUTH_ERROR:
      return{
        ...state,
        loading:false,
        error:action.error
      }
    default:
      return state;

  }
}
