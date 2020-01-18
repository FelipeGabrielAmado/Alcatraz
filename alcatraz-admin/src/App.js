import React from 'react';
import './App.css';

import SideMenu from './components/SideMenu'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
        <SideMenu />
         <Dashboard />
    </div>
  );
}

export default App;
