import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComp from './Components/ParentComp'
import ParentCompOne from './Components/ParentCompOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <ParentComp/> */}
      <ParentCompOne/>
    </div>
  )
}

export default App
