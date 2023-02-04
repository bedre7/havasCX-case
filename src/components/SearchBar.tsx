import React from "react";
import styles from "../styles/SearchBar.module.scss";
import Button from "./Button";

const SearchBar = () => {
  return (
    <form className={styles.search}>
      <input type="text" placeholder="Type here..." />
      <Button />
    </form>
  );
};

export default SearchBar;
