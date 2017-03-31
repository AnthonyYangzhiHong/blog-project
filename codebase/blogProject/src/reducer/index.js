import { combineReducers } from 'redux';
import homeReducer from './rdc.home';

export default combineReducers({
  homePage: homeReducer
});