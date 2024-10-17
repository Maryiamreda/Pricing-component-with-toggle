import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PricingProvider } from './toggle';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PricingProvider>
      <App />
    </PricingProvider>
  </StrictMode>,
);
