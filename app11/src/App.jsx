import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crud from './Components/Crud'


import CrudOne from './Components/CrudOne'
import CrudTwo from './Components/CrudTwo'

import CrudFour from './CrudComp/CrudFour'
import Crudvalid from './CrudComp/Crudvalid'
import CrudValidation from './CrudComp/CrudValidation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Crud /> */}
        {/* <CrudOne /> */}
     {/* <CrudTwo /> */}
     {/* <CrudFour /> */}
    {/* <Crudvalid /> */}
    <CrudValidation/>
         </div>
    </>
  )
}

export default App
