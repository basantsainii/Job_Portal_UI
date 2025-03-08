import axios from "axios";
import React, { useContext, useState } from "react";
import { LoaderContext } from "../../../Components/LoaderContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function UpdateProfileDp() {
  const { setLoading } = useContext(LoaderContext);
  const [preview, setPreview] = useState(null);
const navigate = useNavigate()
  const handlechange = (e)=>{

// e.target.files  gives a field list whose index 0 is with file details
// console.log(e.target.files)
    setPreview(URL.createObjectURL(e.target.files[0]));
  }

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
        "http://localhost:3000/api/upload-single",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      );
      // console.log(res)
      if(res.status === 201){
        navigate(0) //after successful image upload, this will refresh current page
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
      <div className="bg-slate-100 p-2 ">
      <div className="font-bold">Update image</div>
        <form onSubmit={uploadDp} className="mt-3 border rounded-lg p-2 relative">
          <label htmlFor="file"></label>
          <input
            type="file"
            name="file"
            accept="image/*"
            className="text-sm "
            onChange={handlechange}
          />
          {!preview && <p className="text-sm text-red-600">* only jpg, jpeg, png formats allowed</p>}
          {preview && <div> <br />
            <img src={preview} alt="Preview" width="100" />
            <br />
            <input
            type="submit"
            value="Upload"
            className="border p-1 text-sm rounded-md hover:bg-orange-400 hover:cursor-pointer absolute right-1 bottom-1 mt-3"
          />
            </div> }
          
        </form>
      </div>
    </>
  );
}

export default UpdateProfileDp;
