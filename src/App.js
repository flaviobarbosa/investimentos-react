import React from 'react';

import './App.css';

import Routes from './routes';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <div>
        <NavBar />
        <Routes />
      </div>
    </div>
  );
}

export default App;
