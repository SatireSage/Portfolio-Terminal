import React from 'react';
import Terminal from './components/Terminal';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <main className="App-content">
        <Terminal />
      </main>
    </div>
  );
}

export default App;
