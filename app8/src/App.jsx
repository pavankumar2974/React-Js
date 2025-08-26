import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Components/Parent'
import Sibling from './Components/Sibling/Sibling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
{/* <Parent/> */}
<Sibling />

 </div>
    </>
  )
}

export default App
