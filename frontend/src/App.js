import React from 'react';      // Import React (optional if you use React 17+ but safe to keep)
import logo from './logo.svg';  // Import React logo image (default from create-react-app)
import './App.css';             // Import your App-specific vanilla CSS

function App() {
  return (
    <div className="App">        {/* Root div with class for styling */}
      <header className="App-header"> {/* Header with its own styling */}
        <img src={logo} className="App-logo" alt="logo" /> {/* Spinning React logo */}
        <p>Edit <code>src/App.js</code> and save to reload.</p> {/* Instruction text */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;  // Export component for use in index.js
