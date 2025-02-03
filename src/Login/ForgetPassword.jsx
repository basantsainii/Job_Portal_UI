import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { use } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../Components/LoaderContext";

function ForgetPassword() {
  const andEmail = useRef();
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  let [formData, setFormData] =useState({})
const {setLoading} = useContext(LoaderContext)

  // send OTP
  const SendOtp = async (e) => {
    e.preventDefault();
    setLoading(true)
    const data = new FormData(e.target);
    formData = Object.fromEntries(data); // changing formData into object
    setFormData(formData)
    try {
      // console.log("line 10", formData);
      const response = await axios.post(
        "http://localhost:3000/api/forgot-password-otp",
        formData
      );
      if (response.status === 200) {
        sessionStorage.setItem("email", formData.email)
        // andEmail.current.placeholder = formData.email;
        setDisabled(!disabled);
        // setHidden(!hidden);
        // andEmail.current.value = formData.email;
        toast.success("OTP sent to your registered Email");
      }
    } catch (err) {
      if (err.response) {
        // Log backend response
        console.log("Backend error:", err?.response?.data);
        toast.error(err?.response?.data?.message);

      } else {
        // Log other errors
        console.log("internal server error", err.message);
        toast.error("internal server error: " + err.message);
      }
    }finally{
      setLoading(false)
    }
  };


  const naviGate = useNavigate()
  // submit OTP
  const SubmitOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("basant");
    const OTP = e.target.otp.value;
    // console.log({...formData, Otp:OTP});
    try {
      const res = await axios.post(
        "http://localhost:3000/api/otp-verification",
        {...formData, Otp:OTP}
      );
      if (res.status === 200) {
        toast.success("OTP verified successfully");
        // navigate to set new password
        naviGate("/change-password")
      }
    } catch (err) {
      console.log(err.message, err.response.data)
      setMessage(err?.response?.data?.message)
      toast.error(err?.response?.data?.message);
    }finally{
      setLoading(false)
    }
  };
  return (
    <>
      <div className="mx-auto p-4 px-8 w-full sm:w-2/3 md:w-[50%] lg:w-[45%] xl:w-[40%] rounded-md shadow-[0px_0px_25px_1px] shadow-green-900">
        <div className=" flex justify-between">
          <img
            className=""
            width="150px"
            src="src/assets/jobportal2.gif"
            alt=""
          />
          <h2 className="text-3xl mt-1 font-bold text-center">
            Forgot Password
          </h2>
        </div>
        <br />
        <p className="text-center">
          An OTP will be deliver on registered Email
        </p>{" "}
        <br />
        <p className="text-yellow-900 text-sm py-2">
          Please enter your Registered Email
        </p>
        {/* Enter Email */}
        <form onSubmit={SendOtp}>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            placeholder="Your@email.com"
            className="rounded-md border border-gray-400 hover:scale-[1.01] w-5/6 px-1 py-[2px] "
            ref={andEmail}
          />
          <br />
          <br />
          <p hidden={disabled} className="text-end py-2">
            <input
              type="submit"
              value="Send OTP"
              disabled={disabled}
              className="p-1 rounded-md hover:scale-105 transition-all duration-200 hover:text-blue-950 hover:shadow-md hover:bg-yellow-500 bg-yellow-600 hover:cursor-pointer"
            />
          </p>
        </form>


        {/* Enter OTP */}
        <form hidden={!disabled} onSubmit={SubmitOtp}>
          <p className="mb-2 text-sm text-red-900">
            An Otp Sent on Your Registered Email
          </p>
          <label htmlFor="otp">OTP &nbsp;&nbsp;</label>
          <input
            type="text"
            maxLength={6}
            required
            pattern="[0-9]{6}"
            title="Must be a Number"
            minLength={6}
            name="otp"
            placeholder="Enter OTP"
            className="rounded-md border border-gray-400 hover:scale-[1.01] w-5/6 px-1 py-[2px] "
          />
          <p className="text-sm text-red-900 text-right pr-5">{message ? message : ""} &nbsp;</p>
          <p className="text-end py-2">
            <input
              type="submit"
              value="Verify Otp"
              disabled={!disabled}
              className="p-1 rounded-md hover:scale-105 transition-all duration-200 hover:text-blue-950 hover:shadow-md hover:bg-yellow-500 bg-yellow-600 hover:cursor-pointer"
            />
          </p>
        </form>
      </div>
    </>
  );
}

export default ForgetPassword;

// another method

// const SubmitForm = async (e)=>{
//   e.preventDefault();
//   const email = e.target.email.value;
//   if(!email){
//     toast.error("Please enter your registered Email");
//     return;
//   }
//   try{
//     const response = await axios.post(`http://localhost:3000/api/forgot-password-otp-request`, {email : email});
//     if(response.status === 200){
//       toast.success("Email verification successful. Please enter OTP sent to your registered email");
//     }else{
//       toast.error("Email verification failed. Please try again");
//     }
//   }catch(err){
//     toast.error("Error sending OTP");
//   }

// }
