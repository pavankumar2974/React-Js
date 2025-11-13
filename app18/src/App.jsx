import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCount from './HocComponent/ClickCount'
import HoverCount from './HocComponent/HoverCount'
import HandleCounter from './RenderProps/HandleCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <ClickCount/>
        <br/>
        <hr/>
        <HoverCount/> */}
<hr/>
<HandleCounter 
render
/>

      </div>
    </>
  )
}

export default App
