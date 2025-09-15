import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductAdminPanel from './Components/ProductAdminPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ProductAdminPanel />
      </div>
    </>
  )
}

export default App
