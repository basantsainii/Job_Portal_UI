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
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
    {/* Card Container */}
    <div className="w-full sm:w-2/3 md:w-[45%] lg:w-[34%] xl:w-[28%] bg-white p-3 px-10 rounded-lg shadow-lg">
      
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <Link to="/home">
          <img className="md:w-40 w-32" src="src/assets/jobportal2.gif" alt="Job Portal" />
        </Link>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Sign Up</h2>
      </div>

      {/* Instructions */}
      <p className="text-yellow-900 text-sm mt-4">Please fill all details</p>

      {/* Form */}
      <form onSubmit={SubmitForm} action="/mail-verification" className="mt-4 space-y-4">
        <div>
          <label htmlFor="fname" className="block text-gray-700">First Name</label>
          <input type="text" name="fname" placeholder="First Name" required 
            onChange={handleFormData}
            className="w-full p-2 border border-gray-400 rounded-md  outline-none"
          />
        </div>

        <div>
          <label htmlFor="lname" className="block text-gray-700">Last Name</label>
          <input type="text" name="lname" placeholder="Surname" 
            onChange={handleFormData}
            className="w-full p-2 border border-gray-400 rounded-md  outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" name="email" placeholder="abc@email.com" required
            onChange={handleFormData}
            className="w-full p-2 border border-gray-400 rounded-md  outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input type="phone" name="phone" placeholder="Mobile No." 
            onChange={handleFormData}
            className="w-full p-2 border border-gray-400 rounded-md  outline-none"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" name="password" placeholder="Password" required
            onChange={handleFormData}
            className="w-full p-2 border border-gray-400 rounded-md outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="text-end">
          <input type="submit" value="Sign Up"
            className="px-4 py-2 bg-yellow-600 text-white font-medium rounded-md hover:bg-yellow-500 transition-all cursor-pointer"
          />
        </div>
      </form>

      {/* Already Registered Section */}
      <p className="text-center text-sm mt-10">
        Already registered?  
        <Link to="/login">
          <button className="ml-4 border border-green-80 text-green-800 px-3 rounded-md shadow-md hover:bg-green-50 transition">
            Login Here
          </button>
        </Link>
      </p>
    </div>
  </div>
  )
}

export default SignUpForm
