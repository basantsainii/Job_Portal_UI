import React, { useContext, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { LoaderContext } from '../Components/LoaderContext'

function SignUpForm() {
const Navigate = useNavigate()
const {setLoading} = useContext(LoaderContext)


const handleFormData = (e) => {
      //  setFormData({...formData, [e.target.name]: e.target.value})
      //  console.log(formData)
}

   const SubmitForm = async(e)=>{
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data) // changing formData into object
          
          try{
           const response = await axios.post("http://localhost:3000/api/Signup", formData);
           toast.success('Registration Successful. Check your email for verification link.')
           console.log(response?.status, response?.data?.message)
           Navigate('/mail-verification')
           toast.success(response?.data?.message || `Registration Successful. Check your email for verification link.`)
          }catch(err){
            if (err.response) {
              // Log backend response
              console.log("Backend error:", err?.response?.data?.message);
              toast.error(err?.response?.data?.message);
            } else {
              // Log other errors
              console.log("internal server error", err.message);
              toast.error("internal server error: " + err.message);
            }          
          }finally{
            setLoading(false);
          }
   }
  return (
    <div className='min-h-[100vh] flex items-center'>
    <div className='m-auto bg-blend-overlay p-4 px-8 w-full sm:w-2/3 md:w-[45%] lg:w-[34%] xl:w-[28%] rounded-md shadow-[0px_0px_3px_0px] shadow-green-900'>
      <div className=' flex justify-between'>
      <Link to='/home'><img className='md:w-40 w-32 ' width="" src="src/assets/jobportal2.gif" alt="" /></Link>
      <h2 className='text-2xl md:text-3xl mt-1 font-bold text-center'>Sign Up</h2>
      </div>
       <br />
        <p className='text-yellow-900 text-sm'>Please fill All Details</p>
    <form onSubmit={SubmitForm} action='/mail-verification' className=''>
        <label htmlFor="fname">First Name</label> <br />
        <input onChange={handleFormData} type="text" name='fname' placeholder='First Name' required className='rounded-md border border-gray-400 hover:scale-[1.01] w-full p-1'/>
        <br /> <br />
        <label htmlFor="lname">Last Name</label> <br />
        <input onChange={handleFormData} type="text" name='lname' placeholder='Surname' className='rounded-md border border-gray-400 hover:scale-[1.01] w-full p-1'/>
        <br /><br />
        <label htmlFor="email">Email</label> <br />
        <input onChange={handleFormData} type="email" name='email' placeholder='abc@email.com' required className='rounded-md border border-gray-400 hover:scale-[1.01] w-full p-1'/>
        <br /><br />
        <label htmlFor="phone">Phone</label> <br />
        <input onChange={handleFormData} type="phone" name='phone' placeholder='mobile no.' className='rounded-md border border-gray-400 hover:scale-[1.01] w-full p-1'/>
        <br /><br />
        <label htmlFor="password">Password</label> <br />
        <input onChange={handleFormData} type="password" name='password' placeholder='password' required className='rounded-md border border-gray-400 hover:scale-[1.01] w-full p-1'/>
        <br /><br />
        <p className='text-end'><input type="submit" value="sign-up"  className='p-1 rounded-md hover:scale-105 transition-all duration-200 hover:text-blue-950 hover:shadow-md hover:bg-yellow-500 bg-yellow-600 hover:cursor-pointer'/></p>
    </form>
    <p className='py-2'>Already registered?  &nbsp;<a href="/login" ><button className='text-blue-100 text-sm px-[4px] py-[0px] shadow-[0px_0px_2px_1px] shadow-green-900 hover:scale-105 bg-green-700 rounded-md'>login here</button></a></p>
   
    </div>
    </div>
  )
}

export default SignUpForm
