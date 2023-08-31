import React from 'react';
import styles from './ImageGallery.module.css';
export default function ImageGallery({ children }) {
  return <ul className={styles.imageGallery}>{children}</ul>;
}
