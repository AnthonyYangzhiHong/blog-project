import Post from './post';
import { connect } from 'react-redux';
import { fetchPostDetail } from '../action/act.post-detail';

const mapStateToPorps = (state, ownProps) => {
  return {
    postId: ownProps.id,
    isLoading: state.postDetailPage.isFetching,
    error: state.postDetailPage.fetchingFailed,
    post: state.postDetailPage.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      dispatch(fetchPostDetail(id))
    }
  };
};

const PostContainer = connect(
  mapStateToPorps,
  mapDispatchToProps
)(Post);

export default PostContainer;