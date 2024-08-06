import {BrowserRouter,Routes, Route} from 'react-router-dom'
import React from 'react'
import Front from './pages/Front'
import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import Service from './components/Service'
import Login from './components/Login'
import Register from './components/Register'
import DepressionTest from './pages/DepressionTest'
import Navbar from './components/Navbar'


const App = () => {
  return (
   <>
   <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Front/>}/>
        <Route path='/Front' element={<Front/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Doctor' element={<Doctor/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/DepressionTest' element={<DepressionTest/>}/>
        <Route path='/Register'
        component={<Register/>} />
      </Routes>
    </BrowserRouter>
   </div>
</>
  )
}

export default App
