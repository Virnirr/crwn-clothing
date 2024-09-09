import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import { UserProvider } from './context/user.context';
import { ProductProvider } from './context/product.context';
import { CartProvider } from './context/cart.context';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
          <ProductProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);