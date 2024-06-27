import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BlockchainProvider } from './contexts/BlockchainContext';
import { LoadingProvider } from './contexts/LoadingContext';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BlockchainProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BlockchainProvider>
  </React.StrictMode>,
);

reportWebVitals();
