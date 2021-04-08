import React, { useState } from 'react';
import './App.css';
import Timer from './Components/Timer.js';
import TaskList from './Components/TaskList.js';


function App() {

  const [currentTimer, setTimer] = useState(5);

  const switcher = (number) => {
    setTimer(number);
  }


  return (
    <div className="App">
      <Timer fullTime={currentTimer} key={currentTimer}/>
      <TaskList switchTo={switcher}/>
    </div>
  );
}

export default App;
