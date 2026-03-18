import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from '../Layout/Navbar'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
     <main className='flexClass'>
      <Navbar setIsOpen={setIsOpen} />
      <Outlet />
     </main>
   
    </>
  )
}

export default Layout