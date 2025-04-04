import React from 'react'
import CreatedJobCard from '../../Components/ForEmployer/CreatedJobCard'
import job_portal_about from '../../assets/job_portal_about.svg'
import jobSearch1 from '../../assets/jobSearch.jpg'
import { EmployeeData } from '../../Components/ForEmployee/EmployeeDataContext'
import { useContext } from 'react'


function CreatedJobs() {
const  {employeeData} = useContext(EmployeeData);
    const Jobs = [
      { title: "Web Developer", company: "Find Employee", experience: "2-4 years", location: "Dehradun", post_time: "1 day ago", company_logo: job_portal_about, applicants: "5" },
      { title: "Front End react.js", company: "Brillica Services", experience: "Fresher", location: "Dehradun", post_time: "2 days ago", company_logo: jobSearch1, applicants: "15" },
      { title: "BackEnd Node.js", company: "Brillica Services", experience: "2-4 years", location: "Dehradun", post_time: "5 days ago", company_logo: jobSearch1, applicants: "3" },
      { title: "UI/UX Designer", company: "Find Employee", experience: "Fresher", location: "Mohali", post_time: "1 day ago", company_logo: jobSearch1, applicants: "5" },
      { title: "Digital Marketing", company: "Zepto", experience: "2 years", location: "Saharanpur", post_time: "5 days ago", company_logo: job_portal_about, applicants: "56" },
      { title: "Web Development", company: "Find Employee", experience: "2-4 years", location: "Dehradun", post_time: "1 day ago", company_logo: job_portal_about, applicants: "5" },
      { title: "Web Development", company: "Find Employee", experience: "2-4 years", location: "Dehradun", post_time: "1 day ago", company_logo: job_portal_about, applicants: "5" },
    ];
  return (
    <div>
      <p className='text-xl px-2 py-4'>All Jobs posted By You</p>
      <CreatedJobCard Jobs={employeeData?.postedJob || []}></CreatedJobCard>
    </div>
  )
}

export default CreatedJobs
