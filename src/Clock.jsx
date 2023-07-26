import { useState } from 'react'


function getCurrentTime() {
    const t = new Date();
    return t.toISOString();
}

function Clock() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  setInterval(() => {
    setCurrentTime(getCurrentTime())
  }, 1000);

  return (
    <div>{ currentTime }</div>
  )
}

export default Clock;

