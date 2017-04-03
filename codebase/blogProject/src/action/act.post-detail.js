import { POST_DETAIL_URL } from '../constants';
export const FETCH_POSTDETAIL_START = 'FETCH_POSTDETAIL_START';
export const FETCH_POSTDETAIL_FAIL = 'FETCH_POSTDETAIL_FAIL';
export const FETCH_POSTDETAIL_SUCCESS = 'FETCH_POSTDETAIL_SUCCESS';

export const fetchPostDetail = (id) => {
  return (dispatch) => {
    dispatch(fetchPostDetailStart())
    fetch(`${POST_DETAIL_URL}/${id}`)
      .then(res => {
        if (!res.ok)
          dispatch(fetchPostDetailFail());
        return res
      })
      .then(res => res.json())
      .then(post => dispatch(fetchPostDetailSuccess(post)))
  }
}

export const fetchPostDetailStart = () => {
  return {
    type: FETCH_POSTDETAIL_START
  }
}

export const fetchPostDetailFail = () => {
  return {
    type: FETCH_POSTDETAIL_FAIL
  }
}

export const fetchPostDetailSuccess = (post) => {
  return {
    type: FETCH_POSTDETAIL_SUCCESS,
    payload: post
  }
}