import React from 'react';
import './App.scss';
import { Numbers } from './components/Numbers/Numbers';
import { ControlButtons } from './components/ControlButtons/ControlButtons';
import { Display } from './components/Display/Dispaly';


const App = () => {
  return (
    <div className="calculator">
      <Display />
      <div className="buttons">
        <Numbers />
        <ControlButtons />
      </div>
    </div>
  );
}

export default App;
