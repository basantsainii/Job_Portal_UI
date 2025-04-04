import React, { useContext } from 'react'
import { JobContext } from '../Components/ForEmployee/JobContext'
import axios from 'axios'
const  FindJob = async()=>{
  const {job, setJobs} = useContext(JobContext)

  const date = Date.now()
  try{
    const res = await axios.get("http://localhost:3000/api/jobs-get")
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

export default FindJob
