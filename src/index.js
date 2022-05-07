import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore ({
  reducer: {

  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </ChakraProvider>
  </React.StrictMode>
);
