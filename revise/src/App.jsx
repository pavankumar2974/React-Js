import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameInput from './Components/Hoc/NameInput'
import CommentInput from './Components/Hoc/CommentInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Hoc-Input Length Tracker</h1>
        <NameInput />
        <CommentInput />
      </div>
    </>
  );
}

export default App
