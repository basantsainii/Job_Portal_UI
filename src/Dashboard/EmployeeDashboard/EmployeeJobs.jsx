import React, { useContext } from 'react'
import JobCard from '../../Components/ForEmployee/JobCard'


import { JobContext } from '../../Components/ForEmployee/JobContext'
import { EmployeeData } from '../../Components/ForEmployee/EmployeeDataContext'


function EmployeeJobs() {
const {jobs} = useContext(JobContext);
const {employeeData} = useContext(EmployeeData);
console.log(jobs)
console.log(employeeData)


  return (
    <>
      <div className='text-lg text-blue-900 pb-2'>Jobs founded based on your Profile</div>
      {jobs?.length>0 && Object.keys(employeeData).length>0 && <JobCard app={false} Jobs={jobs || []}  /> || <p>no jobs found</p>} 
    </>
  )
}

export default EmployeeJobs
