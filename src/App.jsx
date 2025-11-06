// import React from "react";



// const App = () =>{
//   return{
//  <></>
//   }
// }

 

// export default App

import React from 'react'
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import SignUpp from './pages/SignUpp'
import Props from "./pages/Props";

const App = () =>{
  return (
   // react tags//
     <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route  path='/dashboard' element={<Dashboard/>}/>
        <Route  path='/props' element={<Props/>}/>
        <Route  path='/notfound' element={<NotFound/>}/>
        <Route path = '/signupp' element = {<SignUpp/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App