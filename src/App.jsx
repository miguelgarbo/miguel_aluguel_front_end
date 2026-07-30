import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Auto Rent</h1>
      <div className="bg-red-500 text-white p-10">
        Tailwind funcionando
      </div>

    </>
  )
}

export default App
