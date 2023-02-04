import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.scss';
import Button from './Button';

interface SearchBarProps {
  searchHandler: (input: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchHandler }) => {
  const [input, setInput] = useState('');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Type here..."
        value={input}
        onChange={inputChangeHandler}
      />
      <Button onSearch={searchHandler.bind(this, input)} />
    </div>
  );
};

export default SearchBar;
