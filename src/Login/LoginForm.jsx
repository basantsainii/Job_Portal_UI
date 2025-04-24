import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { LoaderContext } from '../Components/LoaderContext'
import { DataContext } from '../Components/DataContext'
import jobportal2 from '../assets/jobportal2.gif'
import { BackendContext } from '../Components/BackendDomainContext'
import { CloudCog } from 'lucide-react'


function LoginForm() {
const navigate = useNavigate()
const {setLoading} = useContext(LoaderContext)
const {setData} = useContext(DataContext)
const {BackEndDomain} = useContext(BackendContext)

   const SubmitForm = async(e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(data)
    const formData = Object.fromEntries(data) // changing formData into object
    // console.log(formData)
    if(!formData.email || !formData.password){
      toast.error("please fill all the fields")
      return
    }

    // saving username or email into session storage
    // sessionStorage.setItem("email", formData.email)
 
    // saving email in context api
    setData({email:formData.email});
    
    try{
      setLoading(true);
      console.log(BackEndDomain)
           const response = await axios.post(`${BackEndDomain}/api/login`, formData);
           if(response.status === 201){
            toast.success(response?.data?.message || 'you are logged In Successfully')
            // navigate("/employee-dashboard")
            // console.log("bsnt")
            // console.log(response?.headers)
            if(response?.headers["authorization"]){
              console.log(response)
            const token = response?.headers["authorization"];
            localStorage.setItem("token", token)
            }
          
            navigate(response?.data?.redirectUrl)
           }else{
             toast.error(response?.data?.message)
           }
          //  console.log(response?.status, response?.data?.message)
          }catch(err){
            console.log("bsnt")
            console.error(err.message)
            if (err?.response) {
              // Log backend response
              console.error("Backend error:", err?.response?.data?.message);
              toast.error(err?.response?.data?.message);
              if(err?.response?.status == 401){
                  // err.response.status gives statusCode
                toast.error("first verify your email")
                navigate("/mail-verification")
              }
            } else {
              // Log other errors
              console.log("Something went wrong: error in getting response from login axios", err.message);
            }          
          }finally{
            setLoading(false);
          }
   }

   const LoginByAuth = async()=>{
    try{
      setLoading(true);
      // console.log("asdfghjkl")
      const token = localStorage.getItem("token")
      if(!token){
            return;
      }
      const res = await axios.get(`${BackEndDomain}/api/auto-login`, {headers : {authorization: token}});
      console.log(res)
      if(res?.status == 201){
        if(res?.data?.userDetails?.role === "Employee"){
          toast.success(res?.data?.message)
          // console.log("bsnt")
          navigate("/employee-dashboard")
        }
        else if(res?.data?.userDetails?.role === "Employer"){
          navigate("/employer-dashboard")
        }
      }
    }catch(err){
      if(err.response?.status === 401){
        localStorage.removeItem("token");
        console.error(err.response?.data?.message)
        // toast.error("please login....")
      }
    }finally{
      setLoading(false);
    }
   }
   useEffect(()=>{LoginByAuth()},[]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Login Card */}
      <div className="p-5 px-8 w-full sm:w-3/4 md:w-[50%] lg:w-[40%] xl:w-[35%] rounded-md shadow-lg bg-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Link to="/home">
            <img src={jobportal2} alt="Job Portal" className="w-36 sm:w-40" />
          </Link>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900">
            Login
          </h2>
        </div>

        <p className="text-yellow-900 text-sm mb-4">Please fill all details</p>

        {/* Form */}
        <form onSubmit={SubmitForm} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="abc@email.com"
              className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="text-end">
            <input
              type="submit"
              value="Login"
              className="px-4 py-2 rounded-md transition-all duration-200 bg-[#F19D23] text-white hover:bg-yellow-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-10 text-center text-sm">
          <p>
            Don't have an account?{" "}
            <Link to="/sign-up">
            <button className="ml-4 border border-green-80 text-green-800 px-3 rounded-md shadow-md hover:bg-green-50 transition">
            Sign Up
              </button>
            </Link>
          </p>

          <p className="mt-2">
            Forgot Password?{" "}
            <Link to="/password-change-requested">
            <button className="ml-4 border border-green-80 text-green-800 px-3 rounded-md shadow-md hover:bg-green-50 transition">
            Reset
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

