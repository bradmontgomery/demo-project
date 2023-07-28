import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ApiFetcher from './ApiFetcher';
import Clock from './Clock';
import EqualizerBand from './EqualizerBand';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Clock />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr/>
      <div className="band-container">
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
        <EqualizerBand />
      </div>
      <ApiFetcher />
    </>
  )

}

export default App