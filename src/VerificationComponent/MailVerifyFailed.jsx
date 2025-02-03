import React from 'react'

function MailVerifyFailed() {
  return (
    <div>
      <h1 className='text-2xl'><span className='text-red-800'>404 bad request</span>Session Expired!</h1>
      <p>close this page and try again</p>
      <p ><a href="/login"><button className='px-2 py-1 bg-blue-200 rounded'>close</button></a></p>
    </div>
  )
}

export default MailVerifyFailed
