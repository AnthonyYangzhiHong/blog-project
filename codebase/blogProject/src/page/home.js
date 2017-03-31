import React from 'react';
import Header from '../components/Header';
import PostsListContainer from '../components/postslist-container';

const Home = () => {
  return(
    <div className="homepage-container">
      <Header />
      <PostsListContainer />
    </div>
  )
}

export default Home;