// main.jsx
import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
