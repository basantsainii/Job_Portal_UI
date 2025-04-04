import { Outlet, useNavigate } from "react-router-dom";
import EmployeeHeader from "./EmployeeHeader";
import Footer from "../Footer";
import EmployeeHome from "./EmployeeHome";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { ProfileContext } from "../../Components/ForEmployee/ProfileContext";
import { LoaderContext } from "../../Components/LoaderContext";
import { ProfileBackDrop } from "../../Components/ForEmployee/ProfileBackDrop";
import Modal from "../../Modal/Modal";
import { EmployeeData } from "../../Components/ForEmployee/EmployeeDataContext";
import { JobContext } from "../../Components/ForEmployee/JobContext";

import { BackendContext } from "../../Components/BackendDomainContext";

function EmployeeDashboard() {

const navigate = useNavigate();
const {setLoading} = useContext(LoaderContext)
const {setDisplayProfile} = useContext(ProfileContext)
const {backDrop, setBackDrop} = useContext(ProfileBackDrop)
// const [employeeDetails, setEmployeeDetails] = useState({}); 
// console.log(employeeDetails);
// storing user data in global state
const {employeeData, setEmployeeData} = useContext(EmployeeData) 
// console.log(employeeData);
  const { BackEndDomain } = useContext(BackendContext);
  console.log(BackEndDomain);

// getting employee data
const EmployeeAuth = async()=>{
  setLoading(true)
  try{

    const token = localStorage.getItem("token")
    if(!token){
          navigate("/login")
          toast.error("please login....")
          return  
    }
    const res = await axios.get(`${BackEndDomain}/api/auto-login`, {headers : {authorization: token}});
    // console.log(res)  
    // setEmployeeDetails(res?.data?.userDetails);
    setEmployeeData(res?.data?.userDetails)
    // console.log(res?.data?.userDetails)
  }catch(err){
    navigate("/login")
    // toast.error(err?.message);
    localStorage.removeItem("token");
    toast.error("please login first.")
    console.log(err.message)
  }finally{
    setLoading(false); 
  }
}

useEffect(()=>{
  EmployeeAuth()
  console.log("userAuth")
},[]);


const {fetchJobs, setJobs} = useContext(JobContext)
// console.log(fetchJobs)

//getting jobs data
const getJobs = async()=>{
  const date = Date.now()
  try{
    const res = await axios.get(`${BackEndDomain}/api/jobs-get`)
    const foundedJobs = res?.data?.foundJobs.map((job, i)=>{
      const currentDate = new Date(job?.updatedAt)
      // console.log(currentDate)
      let updated = Math.floor((date - currentDate)/(1000*60*60*24)); // date-currentDate give use time difference in milliseconds
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
    // console.log(foundedJobs )
    setJobs(foundedJobs)
    console.log("jobs fetched successfully")
    // setJobsData(jobsFound?.data?.foundJobs)
  }catch(e){
    console.log(e?.message)
  }
}

useEffect(()=>{
  getJobs();
  // return ;
},[fetchJobs])


  return (
    <>
    { backDrop ? <div onClick={()=>{setDisplayProfile(false); setBackDrop(false)}} className={`w-screen h-screen z-10 fixed bg-gray-500 opacity-70`}></div> : ""}
    <Modal></Modal>
      <div  className="w-full min-h-screen ">
          {employeeData && <EmployeeHeader employeeDetails = {employeeData}></EmployeeHeader>}
          <div className=" min-h-screen p-2 bg-[#F7F7FF] ">
          
          {<EmployeeHome >
            <Outlet ></Outlet>
          </EmployeeHome>}
          </div>
          <Footer></Footer>
      </div>
    </>
  );
}

export default EmployeeDashboard;
