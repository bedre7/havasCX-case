import React from 'react';
import styles from '../styles/Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.ids}>
        <p>user id:</p>
        <p>id: </p>
      </div>
      <div className={styles.main}>
        <h2>
          Title: commodi ullam sint et excepturi error explicabo praesentium
          voluptas
        </h2>
        <p>
          body: ad mollitia et omnis minus architecto odit\nvoluptas doloremque
          maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil
          cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam
          inventore
        </p>
      </div>
    </div>
  );
};

export default Card;
