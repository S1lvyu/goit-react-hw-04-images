import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { SearchImageProvider } from 'store/SearchImageContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchImageProvider>
      <App />
    </SearchImageProvider>
  </React.StrictMode>
);
