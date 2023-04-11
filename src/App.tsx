import { useState } from 'react'
import insightLogo from './assets/insight.png'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://insight.com" target="_blank">
          <img
            src={insightLogo}
            className="logo w-[300px] h-auto mx-auto"
            alt="Insight logo"
          />
        </a>
      </div>
      <h1>React Fundamentals</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        {/* <p className="my-4">
          <Link to="/hello">Say hello</Link>
        </p> */}
        <p className="my-4">
          <Link to="/login">Log in</Link>
        </p>
        <p className="my-4">
          <Link to="/structuring-components">Structuring Components</Link>
        </p>
      </div>
    </div>
  )
}

export default App
