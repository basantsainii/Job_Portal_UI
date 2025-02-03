import axios from 'axios';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LoaderContext } from '../Components/LoaderContext';

function ReVerifyMail() {
const {setLoading} = useContext(LoaderContext)
  const navigate = useNavigate();


const SubmitEmail = async (e)=>{
e.preventDefault();
setLoading(true);
const Email = e.target.email.value
try{
  console.log(Email)
 const res  = await axios.post("http://localhost:3000/api/resend-verification-email", {email:Email})
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
      <div className='mx-auto p-1 md:p-4 px-8 w-full sm:w-2/3 md:w-[50%] lg:w-[35%] xl:w-[40%] rounded-md shadow-[0px_0px_25px_1px] shadow-green-900'>
      <div className=" flex justify-between align-middle items-center flex-wrap sm:flex-nowrap">
          <img
            className="mx-auto"
            width="150px"
            src="src/assets/jobportal2.gif"
            alt=""
          />
          <h2 className="text-lg sm:text-2xl mt-1 mx-auto font-bold text-center">
            Verify Email
          </h2>
        </div>
        <br />
        <p className="text-center">
          A Verification link will be deliver on registered Email
        </p>{" "}
        <br />
        <p className="text-yellow-900 text-sm py-2">
          Please enter your Registered Email
        </p>
        {/* Enter Email */}
        <form onSubmit={SubmitEmail}>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            placeholder="Your@email.com"
            className="rounded-md outline-none hover:scale-[1.01] w-5/6 px-1 py-[2px] "
            // ref={andEmail}
          />
          <br />
          <br />
          <p 
          // hidden={disabled} 
          className="text-end py-2">
            <input
              type="submit"
              value="Send OTP"
              // disabled={disabled}
              className="p-1 rounded-md hover:scale-105 transition-all duration-200 hover:text-blue-950 hover:shadow-md hover:bg-yellow-500 bg-yellow-600 hover:cursor-pointer"
            />
          </p>
        </form>
      </div>
    </>
  )
}

export default ReVerifyMail
