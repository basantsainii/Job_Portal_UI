import axios from "axios";
import { header } from "framer-motion/client";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateNewJob = () => {
const navigate = useNavigate()
const skills = useRef()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    qualifications: "",
    experience: "",
    mode: "",
    type: "",
    company: "",
    companyWebsite: "",
    skill: [],
    companyLogo: null,
  });

const [skill, setSkill] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "companyLogo") {
      setFormData({ ...formData, companyLogo: e.target.files[0] });
      
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    console.log(formData)
  };


  const AddSkill = ()=>{
    // console.log(formData)
    const currentValue = skills.current.value.trim()
    console.log(currentValue);
    if(!formData.skill.includes(skills.current.value.trim().toLowerCase()) && skills.current.value.trim() != ""){
    setFormData({...formData, skill : [...formData.skill,skills.current.value.trim().toLowerCase()]})
    skills.current.value = "";
    console.log(formData)
    }
    return;
  }

  const removeSkill = (i)=>{
    // console.log(formData)
    // using splice(starting_index, no of indexes to remove after starting index)
   // const newSkill = [...formData.skill];
  // newSkill.splice(i,1);

  // using filter
    const newSkill = formData.skill.filter((skill)=>skill!=formData.skill[i])

    // resetting form data
    setFormData({...formData, skill : newSkill})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData)
    const token = localStorage.getItem('token')
    if(!token){
      navigate("../login")
    }
    try{

      const res = await axios.post('http://localhost:3000/api/job-post/123456',formData,{headers : {authorization : token}})
if (res?.data?.success == true){
  toast.success(res?.data?.message);

}
    }catch(e){
      console.log(e.message)

    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Job Listing</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          Job Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1 outline-none"
          />
        </label>

        <label className="block">
          Location
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1 outline-none"
          />
        </label>

        <label className="block col-span-2">
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1 outline-none"
            rows={6}
          />
        </label>

        <label className="block">
          Salary (optional)
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 outline-none"
          />
        </label>

        <label className="block">
          Experience Required
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1 outline-none"
          />
        </label>

        <label className="block">
          Job Mode
          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1 outline-none"
          >
            <option value="">Select Mode</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </label>
        <label className="block">
          Type
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1 outline-none"
          >
            <option value="">Select type</option>
            <option value="Remote">Full Time</option>
            <option value="On-site">Part Time</option>
            <option value="Hybrid">permanent</option>
            <option value="Hybrid">contractual</option>
          </select>
        </label>

        <label className="block">
          Company Name
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1 outline-none"
          />
        </label>

        <label className="block">
          Company Website (optional)
          <input
            type="url"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 outline-none"
          />
        </label>


        <label className="block col-span-2">
          Skills Required
          <div className="w-full border rounded-sm p-1 relative">
            <ul className="flex justify-start gap-1 flex-wrap">
              {
              formData.skill.map((s,i)=><li key={i} onClick={()=>removeSkill(i)} className="bg-blue-100 px-1 mb-1 rounded-sm text-blue-900"> {s} <span className="bg-blue-200 px-1 rounded-full">x</span></li>)
            }
              </ul>
            <input
            name="skillsRequired"
            ref= {skills} 
            onKeyDown={(e)=>e.key === "Enter" ?  AddSkill() : ""}
            required
            className="w-full p-1 border-none rounded outline-none bg-none"
          />
            <p onClick={AddSkill}  className="bg-amber-500 p-1 px-2 rounded-sm hover:scale-105 inline absolute right-1 bottom-1">Add</p>
            </div>
        </label>


        {/* <label className="block col-span-2">
          Company Logo
          <input
            type="file"
            name="companyLogo"
            accept="image/*"
            onChange={(e)=>{setSkill([...skill,e.target.value]); handleChange; console.log(skill);}}

            className="w-full p-2 border rounded mt-1 outline-none"
          />
        </label> */}


        <label className="block col-span-2">
          Qualifications
          <textarea
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1 outline-none"
          />
        </label>

        <button
          type="submit"
          className="col-start-2 bg-amber-500 text-white p-2 rounded hover:bg-amber-600"
        >
          Create
        </button>
      </form>
    </div>
  </div>
  );
};

export default CreateNewJob;

