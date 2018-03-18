import {combineReducers} from 'redux'
import DashboardReducer from './dashboard'
import ControlsReducer from './controls'
import authReducer from './auth'
import {reducer as formReducer} from 'redux-form';
export default combineReducers({
  dashboard:DashboardReducer,
  controls:ControlsReducer,
  auth:authReducer,
  form:formReducer
})
