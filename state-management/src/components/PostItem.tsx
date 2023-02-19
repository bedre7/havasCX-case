import React from 'react';
import { Post } from '../model/Post';
import styles from '../styles/PostItem.module.scss';

const PostItem: React.FC<Post> = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.details}>
        <h2>{props.title}</h2>
        <p>ID: {props.id}</p>
        <p>UserID: {props.userId}</p>
        <p>Completed: {props.completed}</p>
      </div>
    </div>
  );
};

export default PostItem;
