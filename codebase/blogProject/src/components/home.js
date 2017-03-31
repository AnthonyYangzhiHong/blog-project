import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  const posts = props.route.data;
  const postsList = posts.map(post => {
    return (
      <div className="well-sm" key={post.id}>
        <Link to={"/posts/"+post.id} >{post.title}</Link>
      </div>
    );
  });
  return (
    <div className="container">
     {postsList}
    </div>
  );
};

export default Home;