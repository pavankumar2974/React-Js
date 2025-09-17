import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycleHooksOne from './Components/LifeCycleHooksOne'
import LifeCycleHooksTwo from './Components/LifeCycleHooksTwo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       {/* <LifeCycleHooksOne /> */}
        <LifeCycleHooksTwo/>
      </div>
    </>
  )
}

export default App
