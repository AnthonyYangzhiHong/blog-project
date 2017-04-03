import React from 'react';
import Header from '../components/Header';
import PostContainer from '../components/post-container';

const PostDetail = (props) => {
  return (
    <div className="postDetailPage-container">
      <Header />
      <PostContainer id={props.params.id} />
    </div>
  )
}

export default PostDetail