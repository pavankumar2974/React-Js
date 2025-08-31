import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Components/Parent'
import ParentComp from './Components/ParentComp'
import UserTable from './Components/UserTable'
import Crud from './Component-Crud/Crud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Parent /> */}
        {/* <ParentComp /> */}
        {/* <UserTable/> */}
       <Crud />
        
      </div>
    </>
  )
}

export default App
