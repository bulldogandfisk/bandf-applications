import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.js';

const container = document.querySelector('#app');

createRoot(container).render(
    <React.StrictMode>
        <App apiBase="http://localhost:3000/dev" />
    </React.StrictMode>
);
