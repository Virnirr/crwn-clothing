import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import { UserProvider } from './context/user.context';
import { CategoryProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
          <CategoryProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoryProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);