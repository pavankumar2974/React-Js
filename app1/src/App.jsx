import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './Component/ToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ToggleButton/>
      </div>
    </>
  )
}

export default App
