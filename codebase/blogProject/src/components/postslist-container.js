import PostsList from './PostsList';
import { connect } from 'react-redux';
import { fetchPosts } from '../action/act.home';

const mapStateToProps = (state) => {
  return {
    isLoading: state.homePage.isFetching,
    error: state.homePage.fetchingFailed,
    posts: state.homePage.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
    }
  }
}

const PostsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);

export default PostsListContainer;