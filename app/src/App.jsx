import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ClassComp from './Component/ClassComp'
// import ClassOneComp from './Component/ClassOneComp'
import ClassObjComp from './Component/ClassObjComp'
import ClassTwoComp, { ClassThreeComp } from './Component/ClassTwoComp'
import ClassFourComp from './Component/ClassFourComp'
import ClassFiveComp from './Component/ClassFiveComp'
import ClassSixComp from './Component/ClassSixComp'
import ParentComp from './ComponentCommunication/parentComp'
import PavanComp from './ComponentCommunication/PavanComp'
import FirstComp from './ComponentCommunication/FirstComp'
import OneComp from './ComponentCommunication/OneComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <ClassComp /> */}
{/* <ClassOneComp/> */}
{/* <ClassObjComp/> */}
{/* <ClassTwoComp/>
<ClassThreeComp/> */}
{/* <ClassFourComp/> */}
{/* <ClassFiveComp/> */}
{/* <ClassSixComp/> */}
{/* <ParentComp/> */}
{/* <PavanComp/> */}
{/* <FirstComp/> */}
<OneComp/>
      </div>
    </>
  )
}

export default App
