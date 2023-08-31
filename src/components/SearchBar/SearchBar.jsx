import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
  };
  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.searchForm__button}>
          <span className={styles.searchForm__button__label}>Search</span>
        </button>

        <input
          className={styles.searchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={event => {
            setSearchQuery(event.target.value);
          }}
        />
      </form>
    </header>
  );
}
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
