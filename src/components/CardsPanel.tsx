import React from 'react';
import styles from '../styles/CardsPanel.module.scss';
import Card from './Card';

const CardsPanel = () => {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardsPanel;
