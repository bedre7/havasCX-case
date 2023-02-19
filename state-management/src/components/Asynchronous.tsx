import React, { useContext } from 'react';
import Layout from './Layout';
import { PostContext } from '../context/PostContext';
import Card from './Card';
import PostItem from './PostItem';

const Asynchronous = () => {
  const { posts } = useContext(PostContext);
  return (
    <Layout header="Async">
      <div className="card-container">
        {posts.map((post) => (
          <PostItem key={post.userId} {...post} />
        ))}
      </div>
    </Layout>
  );
};

export default Asynchronous;
