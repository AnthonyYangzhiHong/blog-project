import React, { Component, PropTypes }from 'react';

class Post extends Component {
  
  componentDidMount() {
    this.props.fetchPost(this.props.id);
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="post-container">
          <div>Post loading...</div>
        </div>
      )
    }
    else if (this.props.error) {
      return (
        <div className="post-container">
          <div>Network error...</div>
        </div>
      )
    }
    else {
      return (
        <div className="post-container">
          {this.props.post.content}
        </div>
      )
    }
  }
}

Post.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  post: PropTypes.object,
  id: PropTypes.string,
  fetchPost: PropTypes.func,
}

export default Post