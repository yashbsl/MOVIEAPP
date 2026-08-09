import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Sidenav from './Components/templates/Sidenav'
import Topnav from './Components/templates/Topnav'


function App() {
  return (
    <div className="bg-[#1F1E24] flex w-screen h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App