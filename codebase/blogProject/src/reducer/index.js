import { combineReducers } from 'redux';
import homeReducer from './rdc.home';
import postDetailPageReducer from './rdc.post-detail';

export default combineReducers({
  homePage: homeReducer,
  postDetailPage: postDetailPageReducer
});