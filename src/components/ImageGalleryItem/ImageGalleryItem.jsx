import React, { useState, useEffect } from 'react';
import styles from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
export default function ImageGalleryItem({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  const openModal = item => {
    setIsModalOpen(true);
    setLargeImage(item.largeImageURL);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLargeImage(null);
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') closeModal();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, [isModalOpen, closeModal]);

  return (
    <>
      {data.map(item => (
        <li
          className={styles.imageGalleryItem}
          key={item.id}
          onClick={() => openModal(item)}
        >
          <img
            src={item.webformatURL}
            alt={item.user}
            className={styles.imageGalleryItem__image}
          />
        </li>
      ))}
      {isModalOpen && <Modal data={largeImage} onClick={closeModal} />}
    </>
  );
}
ImageGalleryItem.propTypes = {
  data: PropTypes.array.isRequired,
};
