import React from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from "@/components/ui/toaster"
import { App } from './App.js';

const container = document.querySelector('#app');

createRoot(container).render(
    <React.StrictMode>
        <App />
        <Toaster />
    </React.StrictMode>
);
