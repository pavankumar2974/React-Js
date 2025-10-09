import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentClass from './Components/ComponentClass'
import Refs from './Components/Refs'
import ClickCounter from './HocComponent/ClickCounter'
import HoverCounter from './HocComponent/HoverCounter'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        {/* <ComponentClass /> */}
        {/* <Refs/> */}
        <ClickCounter/>
        <br/>
        <hr/>
        <HoverCounter/>
      </div>
    </>
  )
}

export default App
