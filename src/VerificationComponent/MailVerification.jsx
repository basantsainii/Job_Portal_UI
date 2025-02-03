import React from 'react'
import { Link } from 'react-router-dom'
function MailVerification() {
  return (
    <div className='border  border-green-950 p-2 text-center'>
      <h1 className=' py-1 text-lg text-blue-950 text-center  shadow-[inset_0px_0px_10px_2px]'> An email with verification link sent on your Email.</h1> <br />
      <p className='text-red-800 '> please check your email,</p>
<br />
      <p className='text-sm'>if you didn't receive any mail, please check your spam folder.</p>
      <p className='text-sm'>if you still didn't receive any mail, please try again later or <Link to="/resend-mail-verification-link"><span className='text-blue-700'>click here</span>. </Link></p> <br /><br />
      <p className=' flex justify-between text-right text-sm text-green-950'><p>if already verified?</p><button className='hover:scale-[1.02] text-green-300'><Link to="/login" href="#" className=' py-[1px] bg-blue-950 rounded-sm px-2 shadow-blue-950  shadow-[0px_0px_2px]'>login</Link></button></p>
    </div>
  )
}

export default MailVerification
