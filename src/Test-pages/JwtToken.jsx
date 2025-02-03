import axios from 'axios'
import React from 'react'

function JwtToken() {
    const sendCookie =async()=>{
        try{
           const response =  await axios.get("http://localhost:3000/api/test-jwt")
        console.log(response)
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <>
    <button onClick={sendCookie} className='p-1 bg-green-700 rounded-md shadow-2xl hover:text-white' >
        add cookie
    </button>
      
    </>
  )
}

export default JwtToken
