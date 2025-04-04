import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoaderContext } from "../Components/LoaderContext";
import { BackendContext } from "../Components/BackendDomainContext";


function ForgetPassword() {
  const andEmail = useRef();
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  let [formData, setFormData] = useState({})
  const { setLoading } = useContext(LoaderContext);
const {BackEndDomain} = useContext(BackendContext)

  // send OTP
  const SendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    formData = Object.fromEntries(data); // changing formData into object
    setFormData(formData);
    try {
      const response = await axios.post(
        `${BackEndDomain}/api/forgot-password-otp`,
        formData
      );
      if (response.status === 200) {
        sessionStorage.setItem("email", formData.email);
        setDisabled(!disabled);
        toast.success("OTP sent to your registered Email");
      }
    } catch (err) {
      if (err.response) {
        console.log("Backend error:", err?.response?.data);
        toast.error(err?.response?.data?.message);
      } else {
        console.log("internal server error", err.message);
        toast.error("internal server error: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const naviGate = useNavigate();
  // submit OTP
  const SubmitOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const OTP = e.target.otp.value;
    try {
      const res = await axios.post(
        `${BackEndDomain}/api/otp-verification`,
        { ...formData, Otp: OTP }
      );
      if (res.status === 200) {
        toast.success("OTP verified successfully");
        naviGate("/change-password");
      }
    } catch (err) {
      console.log(err.message, err.response.data);
      setMessage(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="p-6 w-full max-w-md bg-white rounded-md shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <img width="120px" src="src/assets/jobportal2.gif" alt="Job Portal" />
          <h2 className="text-2xl font-bold">Forgot Password</h2>
        </div>
        <p className="text-center mb-4 text-gray-600">An OTP will be sent to your registered Email</p>
        <p className="text-yellow-900 text-sm mb-2">Please enter your Registered Email</p>

        {/* Enter Email */}
        <form onSubmit={SendOtp} className="space-y-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your@email.com"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ref={andEmail}
          />
          <button
            type="submit"
            disabled={disabled}
            className="w-full py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 transition disabled:opacity-50"
          >
            Send OTP
          </button>
        </form>

        {/* Enter OTP */}
        <form hidden={!disabled} onSubmit={SubmitOtp} className="mt-6 space-y-4">
          <p className="text-sm text-red-900">An OTP has been sent to your registered email</p>
          <label htmlFor="otp" className="block text-sm font-medium">OTP</label>
          <input
            type="text"
            maxLength={6}
            required
            pattern="[0-9]{6}"
            title="Must be a Number"
            minLength={6}
            name="otp"
            placeholder="Enter OTP"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-red-900 text-right">{message}</p>
          <button
            type="submit"
            disabled={!disabled}
            className="w-full py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 transition disabled:opacity-50"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
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
//     const response = await axios.post(`${BackEndDomain}/api/forgot-password-otp-request`, {email : email});
//     if(response.status === 200){
//       toast.success("Email verification successful. Please enter OTP sent to your registered email");
//     }else{
//       toast.error("Email verification failed. Please try again");
//     }
//   }catch(err){
//     toast.error("Error sending OTP");
//   }

// }
