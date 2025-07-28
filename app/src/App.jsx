import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './Component/ClassComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ClassComp />
      </div>
    </>
  )
}

export default App
