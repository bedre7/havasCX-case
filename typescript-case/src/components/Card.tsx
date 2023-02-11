import React from 'react';
import styles from '../styles/Card.module.scss';
import { CardItem } from './DashBoard';

const Card: React.FC<CardItem> = ({ userId, id, title, body }) => {
  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className={styles.ids}>
        <p>User ID: {userId}</p>
        <p>ID: {id}</p>
      </div>
    </div>
  );
};

export default Card;
