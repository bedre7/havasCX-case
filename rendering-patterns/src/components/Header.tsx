import React from 'react';
import Button from './Button';
import styles from '../styles/Header.module.scss';
import { useRouter } from 'next/router';

const Header: React.FC<{ text: string }> = ({ text }) => {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <Button text="Back" onClick={() => router.back()} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Header;
