import React, { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import { ThreeDots } from 'react-loader-spinner';
import './App.css';

const App: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowLoader(false);
    }, 1500);  // loader fades out after 2 seconds

    const timer2 = setTimeout(() => {
      setShowTerminal(true); // terminal fades in a bit after the loader begins fading out
    }, 1500);  // 500ms after the loader starts its fade-out, start the fade-in for the terminal

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="App">
      <main className="App-content">
        <div className={`loader ${showLoader ? 'visible' : ''}`}>
          <ThreeDots color={getComputedStyle(document.documentElement).getPropertyValue('--light-color')} height={80} width={80} />
        </div>
        <div className={`fade-in ${showTerminal ? 'visible' : ''}`}>
          <Terminal />
        </div>
      </main>
    </div>
  );
}

export default App;
