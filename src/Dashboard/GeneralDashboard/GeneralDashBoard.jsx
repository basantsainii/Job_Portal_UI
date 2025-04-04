import React, { Children, useContext, useEffect } from 'react'
import LoginSignUpHeader from './LoginSignUpHeader'
import { Outlet } from 'react-router-dom'
import GenHomeRoot from './GenHomeRoot.jsx'
import Footer from '../Footer.jsx'
import axios from 'axios'
import { JobContext } from '../../Components/ForEmployee/JobContext.jsx'
import { BackendContext } from '../../Components/BackendDomainContext.jsx'


function GeneralDashBoard() {
  const {fetchJobs, setJobs} = useContext(JobContext)
console.log(fetchJobs);
const {BackEndDomain} = useContext(BackendContext)

//getting jobs data
const getJobs = async()=>{
  const date = Date.now()
  try{
    const res = await axios.get(`${BackEndDomain}/api/jobs-get`)
    const foundedJobs = res?.data?.foundJobs.map((job, i)=>{
      const currentDate = new Date(job?.updatedAt)
      // console.log(currentDate)
      let updated = Math.floor((date - currentDate)/(1000*60*60*24));
      // console.log(updated);
      if(updated < 1){
        updated = Math.floor((date - currentDate)/(1000*60*60))
        // console.log(updated);
        if(updated < 1){
          updated = Math.floor((date - currentDate)/(1000*60))
          // console.log(updated);
          return {...job, updatedAt : `${updated} min` }
        }
        return {...job, updatedAt : `${updated} hr` }
      }else if(updated == 1){
        // console.log(updated);
        return {...job, updatedAt : `${updated} day` }
      }else{
        // console.log(updated);
        return {...job, updatedAt : `${updated} days` }
      }
    })
    console.log(foundedJobs )
    setJobs(foundedJobs)
    console.log("jobs fetched successfully")
    // setJobsData(jobsFound?.data?.foundJobs)
  }catch(e){
    console.log(e?.message)
  }
}

useEffect(()=>{
  console.log("general dashboard")
  getJobs();
  // return ;
},[fetchJobs])

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
