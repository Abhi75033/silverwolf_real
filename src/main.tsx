import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global error handler for catching production crashes
if (typeof window !== 'undefined') {
    window.onerror = function (msg, url, line, col, error) {
        console.error("Global Error Caught:", msg, url, line, col, error);
        // Only alert in production if the app fails to mount
        if (!window.location.hostname.includes('localhost')) {
            alert(`SILVERWOLF_DEPLOY_ERROR: ${msg}\nAt: ${url}:${line}:${col}`);
        }
        return false;
    };
}

createRoot(document.getElementById("root")!).render(<App />);
