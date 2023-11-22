import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.js';
import './state/internationalization.js';

const container = document.querySelector('#app');

createRoot(container).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
