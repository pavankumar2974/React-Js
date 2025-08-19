import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComp from './Components/Parent-child/ParentComp'
import ParentCompOne from './Components/child-parent/ParentCompOne'
import Sibling from './Components/SiblingComponent/Sibling'
import SiblingComp from './Components/SiblingComponent/SiblingComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <ParentComp/> */}
      {/* <ParentCompOne/> */}
      {/* <Sibling /> */}
      <SiblingComp/>
    </div>
  )
}

export default App
