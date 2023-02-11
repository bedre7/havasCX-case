import React from 'react';
import styles from '../styles/Post.module.scss';
import { IPost } from '../model/IPost';

const Post: React.FC<{ post?: IPost }> = ({ post }) => {
  return (
    <div>
      <div className={styles.image}>
        <img src={post?.featuredImage.url} />
      </div>
      <h1 className={styles.title}>{post?.title}</h1>
      <h3 className={styles.author}>{post?.author}</h3>
      <h3 className={styles.author}>
          {new Date(post?.createdAt || '')
            .toLocaleString('default', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            })
            .toString()}
      </h3>
      <div className={styles.content}>
        {post?.content.split('\n').map((line) => (
          <p>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;
