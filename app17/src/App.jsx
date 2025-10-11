import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlamesApp from './Component/FlamesApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FlamesApp/>
       </div>
    </>
  )
}

export default App
