import React, { useRef, useEffect } from 'react';
import './App.css';
import DashBoard from './components/DashBoard';

function App() {
  const divElement = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: divElement!.current!.offsetTop - 60,
    });
  }, []);

  return (
    <div className="App" ref={divElement}>
      <DashBoard />
    </div>
  );
}

export default App;
