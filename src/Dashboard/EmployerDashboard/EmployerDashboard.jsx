import React from "react";
import EmployerSideBar from "./EmployerSideBar";
import EmployerHeader from "./EmployerHeader";
import EmployerRoot from "./EmployerRoot";
import EmployeeFooter from "../Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { ProfileContext } from "../../Components/ForEmployee/ProfileContext";
import { LoaderContext } from "../../Components/LoaderContext";
import { ProfileBackDrop } from "../../Components/ForEmployee/ProfileBackDrop";
import Modal from "../../Modal/Modal";
import { EmployeeData } from "../../Components/ForEmployee/EmployeeDataContext";

function EmployerDashboard() {

  const navigate = useNavigate();
const {setLoading} = useContext(LoaderContext)
const {setDisplayProfile} = useContext(ProfileContext)
const {backDrop, setBackDrop} = useContext(ProfileBackDrop)
const {employeeData, setEmployeeData} = useContext(EmployeeData) 
// console.log(employeeData);
const EmployeeAuth = async()=>{
  setLoading(true)
  try{

    const token = localStorage.getItem("token")
    if(!token){
          navigate("/login")
          toast.error("please login....")
          return  
    }
    const res = await axios.get("http://localhost:3000/api/auto-login", {headers : {authorization: token}});
    if(res?.data?.success == true){
      setEmployeeData(res?.data?.userDetails)
    }
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
},[]);



  return (
  <>
  { backDrop ? <div onClick={()=>{setDisplayProfile(false); setBackDrop(false)}} className={`w-screen h-screen z-10 fixed bg-gray-500 opacity-70`}></div> : ""}
  <Modal></Modal>
    <div>
      {/* <div className="flex w-full min-h-screen fixed z-10"> */}
        {/* sidebar */}
        <div className=" border-r bg-white">
          {/* <EmployerSideBar></EmployerSideBar> */}
        </div>

        {/* main view */}
        <div className="w-full">
          {/* header */}
          {/* <EmployerHeader></EmployerHeader> */}
        </div>
      {/* </div> */}

      <div className="flex w-full min-h-screen">
        {/* sidebar */}
        <div className="border-r bg-white">
          <EmployerSideBar></EmployerSideBar>
        </div>

        {/* main view */}
        <div className="w-full">
          {/* header */}
          <EmployerHeader></EmployerHeader>

          {/* main */}
          <div className="min-h-screen bg-gray-200 p-2">
            <EmployerRoot>
              <Outlet></Outlet>
            </EmployerRoot>
          </div>

          {/* footer */}
          <EmployeeFooter></EmployeeFooter>
        </div>
      </div>
    </div>
  </>
  );
}

export default EmployerDashboard;
