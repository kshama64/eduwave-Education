import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Navbar2 from './components/Navbar2'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Navbar/>
 {/* <Navbar2/> */}
 <Outlet/>
 </>
  )
}

export default App
