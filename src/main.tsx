import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Dynamic canonical and OpenGraph URL resolution for SPA SEO
if (typeof window !== 'undefined') {
  const canonicalEl = document.getElementById('canonical-url') as HTMLLinkElement | null;
  if (canonicalEl) {
    canonicalEl.href = window.location.origin + window.location.pathname;
  }
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found in document.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
