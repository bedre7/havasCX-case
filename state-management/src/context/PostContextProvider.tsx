import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Post } from '../model/Post';
import { PostContext } from './PostContext';

const PostContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
