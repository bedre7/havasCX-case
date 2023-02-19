import React from 'react';
import { Post } from '../model/Post';

export interface IPostContext {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const PostContext = React.createContext<IPostContext>({
  posts: [],
  setPosts: () => {},
});
