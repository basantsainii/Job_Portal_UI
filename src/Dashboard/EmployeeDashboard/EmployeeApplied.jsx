import React, { useContext } from 'react'
import JobCard from '../../Components/ForEmployee/JobCard'

import { EmployeeData } from '../../Components/ForEmployee/EmployeeDataContext'
import { div } from 'framer-motion/client'

function EmployeeApplied() {
const {employeeData} = useContext(EmployeeData)
console.log(employeeData?.appliedJobs?.length)
  return (
    <div className='p-2'>
      {employeeData?.appliedJobs?.length > 0 && <div>
        <div className='text-xl mb-3 px-1'>Jobs Applied By You..</div>
        <JobCard app = {true} Jobs = {employeeData?.appliedJobs || []}></JobCard></div>  || <p className='text-lg'>No jobs Applied yet.</p>}
    </div>
  )
}

export default EmployeeApplied
