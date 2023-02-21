import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as AppProvider } from './context/appContext';

import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ChakraProvider theme={theme}>
    <AppProvider>
      <App />
    </AppProvider>
  </ChakraProvider>
  // </React.StrictMode>,
);
