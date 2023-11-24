import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import CartPage from './CartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path='cart' element={<CartPage />}></Route>
      </Routes>
    </BrowserRouter> */}
    <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals