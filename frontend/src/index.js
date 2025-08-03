import React from 'react';                 // Import React library
import ReactDOM from 'react-dom/client';  // Import React DOM (React 18+ way)
import './index.css';                      // Import global vanilla CSS (your new file)
import App from './App';                   // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Get root div
root.render(<App />);                    // Render your App component inside root div
