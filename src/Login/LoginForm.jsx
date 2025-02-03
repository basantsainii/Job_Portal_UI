import React, { useContext, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { LoaderContext } from '../Components/LoaderContext'
import { DataContext } from '../Components/DataContext'

function LoginForm() {
const navigate = useNavigate()
const {setLoading} = useContext(LoaderContext)
const {setData} = useContext(DataContext)

   const SubmitForm = async(e)=>{
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data) // changing formData into object

    // saving username or email into session storage
    // sessionStorage.setItem("email", formData.email)

    // saving email in context api
    setData({email:formData.email})


          try{
           const response = await axios.post("http://localhost:3000/api/login", formData);
           if(response.status === 201){
            toast.success(response?.data?.message || 'you are logged In Successfully')
            // navigate("/employee-dashboard")
            console.log("bsnt")
            console.log(response?.headers)
            navigate(response?.data?.redirectUrl)
           }else{
             toast.error(response?.data?.message)
           }
          //  console.log(response?.status, response?.data?.message)
          }catch(err){
            console.log(err.message)
            if (err.response) {
              // Log backend response
              console.log("Backend error:", err?.response?.data);
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

   const LoginByDefault = ()=>{

   }
  return (
    <div className='mx-auto p-4 px-8 w-full sm:w-2/3 md:w-[50%] lg:w-[45%] xl:w-[40%] rounded-md shadow-[0px_0px_3px_0px] shadow-green-900'>
      <div className=' flex justify-between'>
      <Link to='/home'><img className='' width="150px" src="src/assets/jobportal2.gif" alt="" /></Link>
      <h2 className='text-3xl mt-1 font-bold text-center'>Login</h2>
      </div>
       <br/>
        <p className='text-yellow-900 text-sm'>Please fill All Details</p>
    <form onSubmit={SubmitForm} action='/mail-verification' className=''>
        <label htmlFor="email">Email</label> <br />
        <input type="email" name='email' placeholder='abc@email.com' className='rounded-md border border-gray-400 hover:scale-[1.01] w-full p-1'/>
        <br /><br />
        <label htmlFor="password">Password</label> <br />
        <input type="password" name='password' placeholder='password' className='rounded-md border border-gray-400 hover:scale-[1.01] w-full p-1'/>
        <br /><br />
        <p className='text-end'><input type="submit"  className='p-1 rounded-md hover:scale-105 transition-all duration-200 hover:text-blue-950 hover:shadow-inner hover:bg-yellow-500 bg-yellow-600 hover:cursor-pointer'/></p>
    </form>
    <br />
    <p className='py-1'>Don't have an account? &nbsp; <a className='hover:scale-105' href="/sign-up"><button className='text-sm text-blue px-[4px] shadow-[0px_0px_2px_1px] shadow-green-700 hover:scale-105 bg-yellow-600 rounded-md'>Sign Up</button></a></p>
    <p className='py-1'>Forgot Password? &nbsp; <a href="/password-change-requested"><button className='text-blue text-sm px-[4px] shadow-[0px_0px_2px_1px] shadow-green-700 hover:scale-105 bg-yellow-600 rounded-md'>Reset</button></a></p>
    
    </div>
  )
}

export default LoginForm

