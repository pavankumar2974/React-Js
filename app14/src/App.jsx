import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycleDemo from './Components/LifeCycleDemo'
import Demo from './Component/Demo'
import RefsDemo from './Refs/RefsDemo'
import ClickCounter from './HocComponent/ClickCounter'
import HoverCounter from './HocComponent/HoverCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <LifeCycleDemo /> */}
        {/* <Demo /> */}
        {/* <RefsDemo /> */}
        <ClickCounter/>
        <hr/>
        <HoverCounter/>
      </div>
    </>
  )
}

export default App
