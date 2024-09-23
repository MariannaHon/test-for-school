
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from './redux/store.js'
import App from './components/App/App.jsx'
import 'modern-normalize';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);