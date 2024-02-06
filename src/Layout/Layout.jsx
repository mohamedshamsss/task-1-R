import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>

  <Navbar />
    <div className=''>
    <Outlet />

    </div>
  <Footer />
  </>
}
