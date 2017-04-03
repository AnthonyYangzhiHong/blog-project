import React, { Component, PropTypes }from 'react';
import { Link } from 'react-router';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPostsList(posts) {
    return(
      posts.map(post => {
        return(
          <div className="well-sm" key={post._id}>
            <Link to={`posts/${post._id}`}>{post.title}</Link>
          </div>
        )
      })
    )
  }
  // rendering logic needs refatoring
  render() {
    if (this.props.isLoading) {
      return (
        <div className="postsList-container">
          <div>Posts loading...</div>
        </div>
        );
    } else if (this.props.error) {
      return (
        <div className="postsList-container">
          <div>Network error...</div>
        </div>
      );
    } else {
      return (
        <div className="postsList-container">
          {this.renderPostsList(this.props.posts)}
        </div>
      );
    }
  }
}

PostsList.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.array,
  fetchPosts: PropTypes.func,
}

export default PostsList;