import React from 'react'
import { Link } from 'react-router-dom'
function MailVerifySuccess() {
  return (
    <>
      <div>
        <h1 className='text-xl'><i className="fa-solid fa-circle-check text-green-800"></i> Email Verification Successful</h1>
        <p>Thank You</p>

        <p>login here <Link to="/login"><button className='bg-green px-2 py-1 hover:cursor-pointer'>login</button></Link> </p>
      </div>
    </>
  )
}

export default MailVerifySuccess
