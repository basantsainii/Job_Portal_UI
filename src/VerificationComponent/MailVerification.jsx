import React from 'react'
import { Link } from 'react-router-dom'
function MailVerification() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Container Card */}
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 p-6 sm:p-8 rounded-lg shadow-xl bg-white text-center">
        
        {/* Title */}
        <div className="text-lg sm:text-xl font-semibold text-blue-900 shadow-md bg-blue-50 p-2 rounded-md">
          <h1>An email with a verification link has been sent to your email.</h1>
          {/* Email Instructions */}
        <p className="text-red-800 font-medium mt-4">Please check your email.</p>
        </div>

        
<div className='text-start mt-4'>

        <p className="text-sm text-gray-700 mt-2">
          If you didn't receive any mail, please check your spam folder.
        </p>
        <p className="text-sm text-gray-700">
          If you still didn’t receive any mail, please try again later or{" "}
          <Link to="/resend-mail-verification-link" className="text-blue-700 underline">
            click here
          </Link>.
        </p>
</div>

        {/* Login Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
          <p className="text-green-950 text-sm">Already verified?</p>
          <Link
            to="/login"
            className="bg-blue-950 text-white px-4 py-1 rounded-md shadow-md hover:bg-blue-800 transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </div>

  )
}

export default MailVerification
