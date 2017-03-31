import React from 'react';
import { browserHistory } from 'react-router';

const PostDetail = (props) => {
  const handleRedirect = () => {
    browserHistory.push('/home')
  }
  const content = props.route.data[props.params.id].content;
  return (  
    <div className="container">
      {content}
      <button onClick={handleRedirect}>Go back to Home</button>
    </div>
  )
};

export default PostDetail;