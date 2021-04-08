import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar.js';

export default function Timer (props) {


  const [time, setTime] = useState(props.fullTime);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setTime(time => time - 0.05)
      }, 50);
    }
    if (time <= 0) {
      setActive(false);
    }
    return () => clearInterval(interval);
  }, [time, active])

  const toggleActive = () => {
    setActive(!active);
  }

  const resetTime = () => {
    setTime(props.fullTime);
    setActive(false);
  }

  return (
    <ProgressBar timeFrac={time/props.fullTime} startPause={toggleActive} reset={resetTime}/>
  )
}
