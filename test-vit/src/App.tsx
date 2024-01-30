import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <h1 className="text-3xl font-bold test-red-500 underline text-center">
    This is a testing start page!
   </h1>

  )
}

export default App
