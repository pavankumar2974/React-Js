import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameInput from './Components/Hoc/NameInput'
import CommentInput from './Components/Hoc/CommentInput'
import Refs from './Components/Refs/Refs'
import ClickCounter from './Components/HOC1/ClickCounter'
import HoverCounter from './Components/HOC1/HoverCounter'
import ChildComp from './Components/LifeCycleHooks/ChildComp'
import LifeCycleHooks from './Components/LifeCycleHooks/LifeCycleHooks'
import UserComp from './Components/LifeCycleHooks/UserComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {/* <h1>React Hoc-Input Length Tracker</h1> */}
        {/* <NameInput />
        <CommentInput /> */}
        {/* <Refs/> */}
        {/* <ClickCounter/>
        <br/>
        <hr/>
        <HoverCounter/> */}
        <ChildComp/>
        <LifeCycleHooks/>
        <UserComp/>
      </div>
    </>
  );
}

export default App
