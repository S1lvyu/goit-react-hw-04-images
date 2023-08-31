import React from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ data, onClick }) {
  return (
    <div className={styles.overlay} onClick={onClick}>
      <div className={styles.modal}>
        <img src={data} alt={data} width="1000px" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  data: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
