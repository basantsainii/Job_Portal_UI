import React from 'react'
import { NavLink } from 'react-router-dom';
import jobportal2 from '../../assets/jobportal2.gif'
function EmployerSideBar() {
  


  const Active = "bg-blue-950 w-full p-4 text-white";
  const InActive = "hover:bg-blue-100 w-full p-4";
  return (
    <>
      
      {/* Navigation Menu for Desktop */}
      <div className="flex flex-col items-start w-52 min-h-screen">
      <div><img src={jobportal2} alt=""  className='px-2 py-1 w-36'/></div>
      <div className='flex flex-col items-start w-full border-t'>
          <NavLink className={ ({isActive})=> isActive ? `${Active}` : `${InActive}`} to="home" >Home</NavLink>
          <NavLink to="created-jobs"      className={ ({isActive})=> isActive ? `${Active}` : `${InActive}`}>Posted Jobs</NavLink>
          <NavLink to="create-new-jobs" className={ ({isActive})=> isActive ? `${Active}` : `${InActive}`}>Create New</NavLink>
          <NavLink to="employer-profile"   className={ ({isActive})=> isActive ? `${Active}` : `${InActive}`}>Profile</NavLink>
          <NavLink to="about-us"  className={ ({isActive})=> isActive ? `${Active}` : `${InActive}`}>About Us</NavLink>
      </div>

      {/* <div className=' text-blue-900 text-center text-[0.7rem] w-48 mx-auto  p-2 mt-auto mb-2 rounded-lg'>
      <p >&copy; 2025 Find Employee. <br /> All Rights Reserved.
      </p>
      <p className='border border-slate-400 w-2/3 m-auto mt-2'></p>

      </div> */}
      </div>

    </>
  )
}



export default EmployerSideBar