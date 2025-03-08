import React, { Children } from 'react'
import LoginSignUpHeader from './LoginSignUpHeader'
import { Outlet } from 'react-router-dom'
import GenHomeRoot from './GenHomeRoot.jsx'
import Footer from '../Footer.jsx'
function GeneralDashBoard() {
  return (
    <>
      <LoginSignUpHeader></LoginSignUpHeader>
      <div className='bg-[#F7F7FF]'>
      <GenHomeRoot>
      <Outlet></Outlet>
      </GenHomeRoot>
      </div>
      <Footer></Footer>
    </>
  )
}

export default GeneralDashBoard
