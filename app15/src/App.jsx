import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'
import Refs from './Refs/Refs'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        {/* <ClickCounter />
        <br />
        <hr />
        <HoverCounter /> */}
        <Refs/>
      </div>
    </>
  )
}

export default App
