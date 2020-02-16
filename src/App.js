import React from 'react';

import Dashboard from './containers/Dashboard'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="root">
      <header className="header">
        <h1>Demo Application</h1>
      </header>
      <main className="application-container">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
