import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../Components/LoaderContext";

function ChangePassword() {

const naviGate = useNavigate()
const [disabled, setDisabled] = useState(true);
const [p1,setP1] = useState();
const [p2,setP2] = useState();
const [err, setErr] = useState({});
const {setLoading}= useContext(LoaderContext)


// verifying password
const passwordCheck = (e) => {
  console.log(p1)
  const p2 = e.target.value;
  setP2(p2);
  console.log(p2)
  if (p1.length === p2.length) {
    if (p1===p2) {
    setDisabled(false)
    setErr({message : "matched", color : "text-green-950"});
  }else{
    setErr({message : "mismatched", color : "text-red-800"})
  }
  }else{
    setErr("")
    setDisabled(true)
  }
}

// reset password function
const ResetPassword = async(e)=>{
  e.preventDefault();
  setLoading(true)
  const email = sessionStorage.getItem('email');
  // console.log(p1,p2)
  if(!p2){
    toast.error('Please Enter New Password')
    return
    
  }
  try{
    const res = await axios.post("http://localhost:3000/api/update-details", {email:email, password: p2});
    if (res.status === 200) {
      sessionStorage.setItem('email', "");
      toast.success('Password Changed Successfully')
      // navigate to login page
      naviGate('/login')
    }
  }catch(err){
    toast.error(err?.message)
    console.log(err)
    console.log(err.message)
    console.log(err?.response?.data?.message)
    toast.error(err?.response?.data?.message)
  }finally{
    setLoading(false)
  }

}

  
  return (
    <>
      <div className='mx-auto p-4 px-8 w-full sm:w-2/3 md:w-[50%] lg:w-[35%] xl:w-[40%] rounded-md shadow-[0px_0px_25px_1px] shadow-green-900'>
      <div className=' flex justify-between'>
      <img className='md:w-40 w-28 ' width="" src="src/assets/jobportal2.gif" alt="" />
      <h2 className='text-lg sm:text-xl md:text-2xl mt-1 font-bold text-right'>Reset Password</h2>
      </div>
       <br/>
        <p className='text-yellow-900 text-sm'>Please fill All Details</p>
 
 
    <form onSubmit={ResetPassword }  className=''>
        <label htmlFor="password1">New Password</label> <br />
        <input type="password" onBlur={(e)=>setP1(e.target.value)} name='password1' minLength={6} placeholder='password' required className='rounded-md border border-gray-400 hover:scale-[1.01] w-full p-1'/>
        <br /><br />
        <label htmlFor="password2">Verify New Password</label> <br />
        <input type="password" onChange={passwordCheck} name='password2' minLength={6} placeholder='verify password' required className='rounded-md border border-gray-400 hover:scale-[1.01] w-full p-1'/>
        <p className={`text-sm ${err ? err.color : "text-green-950"}`}>{!p2 ? "" : err ? err.message : "" } &nbsp;</p>
        <p className='text-end'><input type="submit" disabled={disabled}  className={` p-1 rounded-md ${disabled ? "  bg-slate-400 text-gray-600" : " hover:scale-105 transition-all duration-200 hover:text-blue-950 hover:shadow-inner bg-yellow-600 hover:bg-yellow-500  hover:cursor-pointer"} `}/></p>
    </form>
    </div>
    </>
  )
}

export default ChangePassword
