import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Message from './Message/Message';
import { useSearchImageContext } from 'store/SearchImageContext';

export const App = () => {
  const {
    handleSearch,
    searchQuery,
    error,
    isLoading,
    images,
    params,
    totalPages,
    currentPage,
  } = useSearchImageContext();
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {!searchQuery ? (
        <Message message="Enter something in search bar" />
      ) : error ? (
        <Message message={error} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <ImageGallery>
          <ImageGalleryItem data={images} />
        </ImageGallery>
      )}

      {!error && params.q && totalPages > 1 && currentPage < totalPages && (
        <Button />
      )}
    </div>
  );
};
