import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentClass from './Components/ComponentClass'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <ComponentClass/>
        </div>
    </>
  )
}

export default App
