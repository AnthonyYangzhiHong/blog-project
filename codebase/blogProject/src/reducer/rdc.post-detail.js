import { FETCH_POSTDETAIL_START, FETCH_POSTDETAIL_FAIL, FETCH_POSTDETAIL_SUCCESS } from '../action/act.post-detail';

const initialState = {
  isFetching: false,
  post: {},
  fetchingFailed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTDETAIL_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_POSTDETAIL_FAIL:
      return {
        ...state,
        isFetching: false,
        fetchingFailed: true
      };
    case FETCH_POSTDETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        post: action.payload
      }
    default:
      return state;
  }
}