import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crud from './Components/Crud'
import CrudValidation from './Components/CrudValidation'

import CrudOne from './Components/CrudOne'
import CrudTwo from './Components/CrudTwo'

import CrudFour from './CrudComp/CrudFour'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Crud /> */}
        {/* <CrudOne /> */}
     {/* <CrudTwo /> */}
     <CrudFour />
         </div>
    </>
  )
}

export default App
