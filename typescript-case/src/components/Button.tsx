import React from 'react';
import styles from '../styles/Button.module.scss';
import { ReactComponent as SearchIcon } from '../assets/SVG/search.svg';

interface ButtonProps {
  onSearch: () => void;
}

const Button: React.FC<ButtonProps> = ({ onSearch }) => {
  return (
    <button className={styles.button} onClick={onSearch}>
      <SearchIcon />
      <span>Search</span>
    </button>
  );
};

export default Button;
