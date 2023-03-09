import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartProvider'
import { ProductsProvider } from './context/ProductsProvider'
import { UserProvider } from "./context/UserProvider"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<App />} />
                </Routes>
        </BrowserRouter>
        </UserProvider>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
