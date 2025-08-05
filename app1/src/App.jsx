import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './Component/ToggleButton'
import UserClass from './Component/UserClass'
import ParentTwo from './Component/ParentTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <ToggleButton/> */}
        {/* <UserClass/> */}
        <ParentTwo />
      </div>
    </>
  )
}

export default App
