import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentEnrollmentSystem from './Components/StuduentEnrollmentSystem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <StudentEnrollmentSystem  />
       </div>
    </>
  )
}

export default App
