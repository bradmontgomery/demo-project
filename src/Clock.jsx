import { useState } from 'react'
import './Clock.css';

function getCurrentTime() {
    const t = new Date();
    return t.toISOString();
}

function Clock() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  setInterval(() => {
    setCurrentTime(getCurrentTime())
  }, 1000);

  const dt = new Date(currentTime);
  const time = dt.toLocaleTimeString('en-US');
  const date = dt.toLocaleDateString();

  return (
    <div id="clock">
      <div id="time">{ time }</div>
      <div id="date">{ date }</div>
    </div>
  )
}

export default Clock;

