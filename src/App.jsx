import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login'
import './App.css'
import Splash from './pages/Splash'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Header from './components/Header'
import Help from './pages/Help'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  // return <Splash/>

  return (
    // <>
    //   {/* <Login></Login> */}
    //   <Signup></Signup>
    // </>
    <Router>
      <Routes>
        <Route path='/' element={<Splash />}></Route>
        <Route path='/home' element={<Home />}>Home</Route>
        <Route path="/signup" element={<Signup />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
