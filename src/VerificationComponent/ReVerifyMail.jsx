import axios from 'axios';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LoaderContext } from '../Components/LoaderContext';
import { BackendContext } from '../Components/BackendDomainContext';
function ReVerifyMail() {
const {setLoading} = useContext(LoaderContext)
const {BackEndDomain} = useContext(BackendContext)

  const navigate = useNavigate();


const SubmitEmail = async (e)=>{
e.preventDefault();
setLoading(true);
const Email = e.target.email.value
try{
  console.log(Email)
 const res  = await axios.post(`${BackEndDomain}/api/resend-verification-email`, {email:Email})
 if(res.status === 200){
  toast.success("email sent successfully");
  navigate("/mail-verification")
 }else{
  toast.error("wrong email internal server error")
 }
}catch(err){
  console.log(err?.message)
  toast.error(err?.response?.data?.message)
}finally{
  setLoading(false);
}
}


  return (
    <>
       <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Card Container */}
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 p-6 sm:p-8 rounded-md shadow-xl bg-white">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center sm:text-left gap-4">
          <img
            src="src/assets/jobportal2.gif"
            alt="Job Portal Logo"
            className="w-28 sm:w-32 mx-auto sm:mx-0"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
            Verify Your Email
          </h2>
        </div>

        <p className="text-gray-600 mt-4 text-center">
          A verification link will be sent to your registered email.
        </p>

        <p className="text-yellow-900 text-sm mt-4">Please enter your registered email</p>

        {/* Form Section */}
        <form onSubmit={SubmitEmail} className="mt-4">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          {/* Submit Button */}
          <div className="mt-4 text-end">
            <input
              type="submit"
              value="Send OTP"
              className="px-4 py-2 rounded-md transition-all duration-200 bg-yellow-600 text-white hover:bg-yellow-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default ReVerifyMail
