import React from 'react';
import styles from '../styles/Dashboard.module.scss';
import CardsPanel from './CardsPanel';
import SearchBar from './SearchBar';

const DashBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <SearchBar />
      </div>
      <div className={styles.main}>
        <CardsPanel />
      </div>
    </div>
  );
};

export default DashBoard;
