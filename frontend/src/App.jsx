import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Collection from './pages/Collection'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right'
    />
      <Routes>
        {/* User Layout  */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='collections/:collection' element={<Collection />}/>
        </Route>
        {/* Admin Layout */}
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
