import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SiblingComp from './Components/SibilingComp'
import Sibling from './ComponentComunication/Sibling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SiblingComp />
      <Sibling />
    </div>
  )
}

export default App
