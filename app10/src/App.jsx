import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CrudTable from './Components/CrudTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CrudTable/>
     </div>
    </>
  )
}

export default App
