import React from "react";
import styles from "./SearchBar.module.scss";
import SearchIcon from "./SearchIcon.js"

const SearchBar = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
      <SearchIcon className={styles.icon} />
        <input
          aria-label="Znajdź gdzie kto siedzi"
          onInput={props.onInput}
          placeholder={"Wpisz imię lub nazwisko"}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default SearchBar;
