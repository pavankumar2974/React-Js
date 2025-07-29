import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ClassComp from './Component/ClassComp'
// import ClassOneComp from './Component/ClassOneComp'
import ClassObjComp from './Component/ClassObjComp'
import ClassTwoComp, { ClassThreeComp } from './Component/ClassTwoComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <ClassComp /> */}
{/* <ClassOneComp/> */}
{/* <ClassObjComp/> */}
<ClassTwoComp/>
<ClassThreeComp/>
      </div>
    </>
  )
}

export default App
