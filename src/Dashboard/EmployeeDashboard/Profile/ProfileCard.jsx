import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProfileContext } from '../../../Components/ForEmployee/ProfileContext';
import { ProfileBackDrop } from '../../../Components/ForEmployee/ProfileBackDrop';
import toast from 'react-hot-toast';

function ProfileCard(props) {
  const navigate = useNavigate();
  const {setDisplayProfile} = useContext(ProfileContext)
  const {setBackDrop} = useContext(ProfileBackDrop)
    const logOut = ()=>{localStorage.removeItem("token"); navigate('/'); setDisplayProfile(false);setBackDrop(false); toast.success("logOut Successfully")}
    
    // storing profile details to a variable from props
    const profileData = props.displayProfile;

  return (

    <div onClick={(e)=>{e.stopPropagation()}} className={`w-72 p-5 bg-white absolute z-20 top-full right-2 rounded-lg shadow-[0px_0px_10px_0px_gray] ` }>
        <div className=' flex-col justify-items-center border rounded-2xl relative top-4'>
        <Link to='user-profile'><div onClick={()=>{setDisplayProfile(false); setBackDrop(false)}} className='rounded-full w-20 h-20 bg-emerald-900 relative -top-8 overflow-hidden'>
          <img src={profileData?.dp} alt="" />
          </div></Link>
        <div className='text-xl'>{profileData.fname +" "+ profileData.lname}</div> <br />
        <Link to='user-profile'><div onClick={()=>{setDisplayProfile(false); setBackDrop(false)}} className='text-sm text-blue-600 cursor-pointer'>View Profile</div></Link> <br />
        </div>
            <br /><br />
        {/* <div>Settings</div> */}
        {/* <br /> */}
        {/* <hr /> */}
        {/* <br /> */}
        <div onClick={logOut} className='cursor-pointer text-gray-700 hover:text-gray-100 font-bold hover:scale-100 hover:bg-yellow-500 p-1 rounded-md text-center bg-slate-100'>Logout</div>
        <br />
        <Link to='/home' onClick={()=>{setDisplayProfile(false); setBackDrop(false)}} className='text-blue-500'>homePage</Link>
    </div>
  )
}
// ${ !display ? "hidden" : ""}
export default ProfileCard

