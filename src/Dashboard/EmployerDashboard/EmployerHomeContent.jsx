import React, { useState } from 'react'
import CreatedJobCard from '../../Components/ForEmployer/CreatedJobCard'
import job_portal_about from '../../assets/job_portal_about.svg'
import jobSearch1 from '../../assets/jobSearch.jpg'



import { EmployeeData } from '../../Components/ForEmployee/EmployeeDataContext'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'


function EmployerHomeContent() {
  const {employeeData} = useContext(EmployeeData)
  const [selected, setSelected] = useState(true)
  // console.log(employeeData?.postedJob)

  // const Jobs = [
  //     { title: "Web Developer", company: "Find Employee", experience: "2-4 years", location: "Dehradun", post_time: "1 day ago", company_logo: job_portal_about, applicants: "5" },
  //     { title: "Front End react.js", company: "Brillica Services", experience: "Fresher", location: "Dehradun", post_time: "2 days ago", company_logo: jobSearch1, applicants: "15" },
  //     { title: "BackEnd Node.js", company: "Brillica Services", experience: "2-4 years", location: "Dehradun", post_time: "5 days ago", company_logo: jobSearch1, applicants: "3" },
  //     { title: "UI/UX Designer", company: "Find Employee", experience: "Fresher", location: "Mohali", post_time: "1 day ago", company_logo: jobSearch1, applicants: "5" },
  //     { title: "Digital Marketing", company: "Zepto", experience: "2 years", location: "Saharanpur", post_time: "5 days ago", company_logo: job_portal_about, applicants: "56" },
  //     { title: "Web Development", company: "Find Employee", experience: "2-4 years", location: "Dehradun", post_time: "1 day ago", company_logo: job_portal_about, applicants: "5" },
  //     { title: "Web Development", company: "Find Employee", experience: "2-4 years", location: "Dehradun", post_time: "1 day ago", company_logo: job_portal_about, applicants: "5" },
  //   ];

  


    return (
    <div>
      <div className=' flex justify-between bg-white rounded-lg '>
        <div className='text-xl'>Total Jobs Posted : {employeeData?.postedJob?.length || 0}</div>
      <div className='border border-blue-400 text-sm p-1 hover:bg-amber-500 rounded-sm hover:text-white'><NavLink to='/employer-dashboard/create-new-jobs '>Post New Job <span></span></NavLink> </div>
      </div>  <br />
      {/* <div>candidates approved for interview</div>
      <div>interviews held / upcoming interview</div>
      <div>selected candidates</div>
      <div>job title wise selected candidates</div> */}
      <p className='text-xl'>Latest Jobs Posted</p>
      <div className='my-4'>
        {/* /// employeeData?.postedJob?.slice(-3).reverse()  , in slice -3 denoted last three elements , and .reverse()  will reverse the order */}
      <CreatedJobCard Jobs={selected ? employeeData ? employeeData?.postedJob?.slice(-3).reverse() || [] : employeeData?.postedJob.reverse() || [] : []}></CreatedJobCard>
      {/* <p className='hover:cursor-pointer float-right' onClick={()=>{setSelected(!selected)}}>{selected ? "see all" : "close full view"}</p> */}
      <div className='cursor-pointer text-blue-800'><NavLink to="/employer-dashboard/created-jobs">see all</NavLink></div>
      </div>
    </div>
  )
}

export default EmployerHomeContent

