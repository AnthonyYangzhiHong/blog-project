import { AJAX_START, AJAX_SUCCESS, AJAX_FAIL } from '../action/act.home';

const initialState = {
  isFetching: false,
  posts: [],
  fetchingFailed: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case AJAX_START:
      return {
        ...state,
        isFetching: true
      };
    case AJAX_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      };
    case AJAX_FAIL:
      return {
        ...state,
        fetchingFailed: true
      };
    default:
      return state;
  }
}