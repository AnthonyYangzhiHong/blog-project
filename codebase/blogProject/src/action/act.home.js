import { POSTS_URL } from '../constants';

export const FETCH_POSTS = 'FETCH_POSTS';
export const AJAX_START = 'AJAX_START';
export const AJAX_SUCCESS = 'AJAX_SUCCESS';
export const AJAX_FAIL = 'AJAX_FAIL';

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(ajaxStart());
    fetch(POSTS_URL)
    .then(res => {
      if (!res.ok)
        dispatch(ajaxFail());
      return res
    })
    .then(res => res.json())
    .then(posts => dispatch(ajaxSuccess(posts)))
  }
}

export const ajaxStart = () => {
  return {
    type: AJAX_START
  }
}

export const ajaxSuccess = (res) => {
  return {
    type: AJAX_SUCCESS,
    payload: res
  }
}

export const ajaxFail = () => {
  return {
    type: AJAX_FAIL
  }
}