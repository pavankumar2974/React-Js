import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycleDemo from './Components/LifeCycleDemo'
import Demo from './Component/Demo'
import RefsDemo from './Refs/RefsDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <LifeCycleDemo /> */}
        {/* <Demo /> */}
        <RefsDemo />
      </div>
    </>
  )
}

export default App
