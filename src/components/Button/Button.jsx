import React from 'react';
import styles from './Button.module.css';

import { useSearchImageContext } from 'store/SearchImageContext';
export default function Button() {
  const { increasePage } = useSearchImageContext();
  return (
    <button className={styles.button} onClick={increasePage}>
      Load More
    </button>
  );
}
