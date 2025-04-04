import React, { useContext, useState } from "react";
import { LoaderContext } from "../../../Components/LoaderContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { BackendContext } from "../../../Components/BackendDomainContext";


function UpdateResume() {
  const { setLoading } = useContext(LoaderContext);
    const { BackEndDomain } = useContext(BackendContext);
  
  const navigate = useNavigate();

  const uploadDp = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(data)
    const formData = Object.fromEntries(data); // changing formData into object
    // console.log(formData.file);

    if (!formData.file.name) {
      toast.error("Please select a file first!");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${BackEndDomain}/api/upload-single`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      );
      // console.log(res)
      if (res.status === 201) {
        toast.success(res?.data?.message)
        setTimeout(() => {
          navigate(0); //after successful image upload, this will refresh current page
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="relative">
        <div className="font-bold">Add File</div>
        <form onSubmit={uploadDp} className="border p-2 mt-3 rounded-lg relative">
          <label htmlFor="file"></label> 
          <input
            type="file"
            name="file"
            accept="application/pdf"
            className="text-sm "
          />
          <p className="text-red-600 text-sm">* only pdf format</p>
          <input
            type="submit"
            value="Upload"
            className="border p-1 text-sm rounded-md hover:bg-orange-400 hover:cursor-pointer ml-auto mt-5"
          />
        </form>
      </div>
    </>
  );
}

export default UpdateResume;
