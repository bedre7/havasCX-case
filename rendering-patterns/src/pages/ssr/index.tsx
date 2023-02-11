import React from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post'
import { IPost } from '../../model/IPost';
import { GraphQLClient } from 'graphql-request';
import { POST_URL, POST_ID } from '../api/config';

export default function ServerSideRenderedPost({ post }: { post: IPost }) {
  return (
    <div>
      <Header text="Server-side Rendered Post" />
      <Post post={post} />
    </div>
  );
}

export const getServerSideProps = async ({}: any) => {
  const client = new GraphQLClient(POST_URL || '');

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

  const data: { post: IPost | null } = await client.request(postQuery, {
    id: POST_ID,
  });

  console.log('ssr');

  if (!data.post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data.post,
    },
  };
};
