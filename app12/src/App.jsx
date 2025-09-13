import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SES from './Components/SES'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SES />
     </div>
    </>
  )
}

export default App
