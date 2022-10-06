import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { render } from 'react-dom';
import './Style.css';
import { DataList } from './DataList';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


// const App = () => {
//   return (
//     <CartProvider>
//       <div>
//         <Cart />
//         <DataList />
//       </div>
//     </CartProvider>
//   )
// }

//render(<App />, document.getElementById('root'));
