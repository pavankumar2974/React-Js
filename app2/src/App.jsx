import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentOneComp from './ParentOneComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ParentOneComp />
    </div>
  )
}

export default App
