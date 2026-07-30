import { useState } from 'react'
import './App.css'
import { CardCarInfo } from './components/card_car_info'
import { Home } from './layouts/home'
import { NavBar } from './components/nav_bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
    </>
  )
}

export default App
