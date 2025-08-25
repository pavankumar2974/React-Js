import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Components/Parent'
import ParentComp from './Components/ParentComp'
import Sibling from './Components/Sibling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Parent /> */}
        {/* <ParentComp /> */}
        <Sibling />
    </div>
    </>
  )
}

export default App
