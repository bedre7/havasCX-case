import React, { useState, useEffect } from 'react';
import { GraphQLClient } from 'graphql-request';
import Header from '../../components/Header';
import Post from '../../components/Post'
import { IPost } from '../../model/IPost';
import { POST_URL, POST_ID } from '../api/config';

const postQuery = `
  query Post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      author
      content
      createdAt
      featuredImage {
        url
      }
    }
  }
`;

const ClientSideRendering = () => {
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    if (!POST_URL) return;
    const client = new GraphQLClient(POST_URL);

    client
      .request(postQuery, { id: POST_ID })
      .then((data: { post: IPost }) => {
        setPost(data.post);
        console.log(data.post.createdAt)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Header text="Client-side Rendered Post" />
      <Post post={post} />
    </div>
  );
};

export default ClientSideRendering;
