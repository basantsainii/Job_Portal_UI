import React, { Children } from 'react'
import LoginSignUpHeader from './LoginSignUpHeader'
import { Outlet } from 'react-router-dom'
import GenHomeRoot from './GenHomeRoot.jsx'
import Footer from '../Footer.jsx'
function GeneralDashBoard() {
  return (
    <>
      <LoginSignUpHeader></LoginSignUpHeader>
      <GenHomeRoot>
      <Outlet></Outlet>
      </GenHomeRoot>
      <Footer></Footer>
    </>
  )
}

export default GeneralDashBoard
