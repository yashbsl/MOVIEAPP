import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Sidenav from './Components/templates/Sidenav'
import Topnav from './Components/templates/Topnav'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movie from './Components/Movie'
import Tvshows from './Components/Tvshows'
import People from './Components/People'

function App() {
  return (
    <div className="bg-[#1F1E24] flex w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/people" element={<People />} />


      </Routes>
    </div>
  )
}

export default App