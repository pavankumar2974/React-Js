import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycleHooksOne from './Components/LifeCycleHooksOne'
import LifeCycleHooksTwo from './Components/LifeCycleHooksTwo'
import LifeCycleHooksDemo from './Component/lifecyclehooksdemo'
import DemoHooks from './Component/DemoHooks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       {/* <LifeCycleHooksOne /> */}
        {/* <LifeCycleHooksTwo/> */}
        {/* <LifeCycleHooksDemo /> */}
        <DemoHooks/>
      </div>
    </>
  )
}

export default App
