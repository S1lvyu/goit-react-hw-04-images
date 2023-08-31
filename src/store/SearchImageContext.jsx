import React, { useContext, createContext, useState, useEffect } from 'react';
import { getData } from 'api/api';
const SearchImageContext = createContext();

export function SearchImageProvider({ children }) {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const [prevSearchQuery, setPrevSearchQuery] = useState('');

  const params = {
    q: searchQuery,
    page: currentPage,
    per_page: 12,
  };

  const fetchData = async () => {
    try {
      if (searchQuery) {
        const response = await getData(params);
        if (!response || !response.hits.length) {
          throw new Error('Nu au fost găsite date.');
        }
        setImages(prev => [...prev, ...response.hits]);
        const total = Math.ceil(response.totalHits / params.per_page);
        setTotalPages(total);
        setError(null);
      } else {
        setImages([]);
        setTotalPages(0);
      }
      setIsLoading(false);
    } catch (error) {
      setError('There is no data matching your search');

      setIsLoading(false);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (searchQuery !== prevSearchQuery) {
      setImages([]);
      setCurrentPage(1);
    }

    setPrevSearchQuery(searchQuery);

    fetchData();
    //eslint-disable-next-line
  }, [searchQuery, currentPage]);

  const increasePage = () => {
    setCurrentPage(currentPage + 1);
  };

  const contextValue = {
    handleSearch,
    searchQuery,
    error,
    isLoading,
    images,
    params,
    totalPages,
    currentPage,
    increasePage,
  };

  return (
    <SearchImageContext.Provider value={contextValue}>
      {children}
    </SearchImageContext.Provider>
  );
}
export function useSearchImageContext() {
  return useContext(SearchImageContext);
}
