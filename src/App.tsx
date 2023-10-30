import { useState } from 'react'
import reactLogo from './assets/react.svg'
import testgear from '/testgear.png'
import './App.css'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={testgear} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Testing with React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>       
      </div>
      <Hello name="Aaron"/>
      <Hello name="Julian"/>
    </>
  )
}

export default App
