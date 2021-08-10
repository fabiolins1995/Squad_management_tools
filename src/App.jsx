/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';
import GlobalStyle from './styles/GlobalStyles';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Routes from './routes';

/*----------------------------------------------------------------------------
Page
----------------------------------------------------------------------------*/
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <TopBar />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={6000} className="toast-container" />
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
