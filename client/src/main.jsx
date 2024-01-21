import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Signin from "./pages/Signin.jsx"
import Signup from './pages/Signup.jsx'
import About from './pages/About.jsx'
import Header from "./components/Header.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sign-in" element={<Signin />}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/About" element={<About />}/>
  </Routes>
  </BrowserRouter>
)
