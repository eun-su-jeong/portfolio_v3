import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='portfolio_v3'>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
