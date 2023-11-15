import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';

// core styles are required for all packages
import '@mantine/core/styles.css';

// Say something
console.log('[ERWT] : Renderer execution started');

// Render application in DOM
createRoot(document.getElementById('app')).render(<Application />);
