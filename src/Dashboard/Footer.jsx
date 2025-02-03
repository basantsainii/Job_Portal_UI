import React from 'react'
import { Link } from 'react-router-dom'
import jobPortal2 from "../assets/jobportal2.gif"
function EmployeeFooter() {
  const hover = "hover:text-white hover:[text-shadow:0px_0px_5px_red] hover:cursor-pointer"
  return (
    <>
      <div className=' shadow-[0px_3px_10px_0px_black] flex justify-between gap-2 items-center p-2 py-4'>
        <div><Link to="/employee-dashboard/"><img src={jobPortal2} className='h-16' alt="Employee portal" /></Link></div>
        <div>
          <div className={`hover:text-white hover:[text-shadow:0px_0px_5px_red] hover:cursor-pointer`}> <Link to="/employee-dashboard/about-us">About us</Link></div>
          <div className={`${hover}`}> <Link to="/employee-dashboard/privacy-policy">Privacy Policy</Link></div>
          <div className={`${hover}`}><Link to="/employee-dashboard/terms-and-conditions">Terms & Conditions</Link></div>
          
        </div>
        <div className="">
          <div className={`${hover}`}><Link to="/employee-dashboard/help-center">Help Centre</Link></div>
          <div className={`${hover}`}><Link to="/employee-dashboard/feedback">FeedBack</Link></div>
        </div>
        <div>
          <div className='text-sm'>Connect With Us</div>
          <div><i className={`fa-brands fa-facebook ${hover}`}></i> <i className={`fa-brands fa-instagram ${hover}`}></i>  <i className={`fa-brands fa-linkedin ${hover}`}></i> <i className={`fa-brands fa-x-twitter ${hover}`}></i></div>

        </div>
      </div>
    </>
  )
}

export default EmployeeFooter
