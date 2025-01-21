import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import PublicRoute from './components/public/publicRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PublicRoute/>
  </React.StrictMode>
);
