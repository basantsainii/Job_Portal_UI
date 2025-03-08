import { Outlet, useNavigate } from "react-router-dom";
import EmployeeHeader from "./EmployeeHeader";
import Footer from "../Footer";
import EmployeeHome from "./EmployeeHome";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { ProfileContext } from "../../Components/ProfileContext";
import { LoaderContext } from "../../Components/LoaderContext";
import { ProfileBackDrop } from "../../Components/ProfileBackDrop";
import Modal from "../../Modal/Modal";



function EmployeeDashboard() {
const navigate = useNavigate();
const {setLoading} = useContext(LoaderContext)
const {setDisplayProfile} = useContext(ProfileContext)
const {backDrop, setBackDrop} = useContext(ProfileBackDrop)
const [employeeDetails, setEmployeeDetails] = useState({}); 

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
    // console.log(res)  
    setEmployeeDetails(res?.data?.userDetails);
    console.log(res?.data?.userDetails)
  }catch(err){
    navigate("/login")
    // toast.error(err?.message);
    localStorage.removeItem("token");
    toast.error("please login first.")
    // console.log(err.message)
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
      <div  className="w-full min-h-screen ">
          <EmployeeHeader employeeDetails = {employeeDetails}></EmployeeHeader>
          <div className=" min-h-screen bg-[#F7F7FF] ">
          <EmployeeHome>
            <Outlet></Outlet>
          </EmployeeHome>
          </div>
          <Footer></Footer>
      </div>
    </>
  );
}

export default EmployeeDashboard;
