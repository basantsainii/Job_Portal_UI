import React, { useContext } from 'react'
import { LoaderContext } from '../../../Components/LoaderContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BackendContext } from '../../../Components/BackendDomainContext';
import { ModalContext } from '../../../Modal/ModalContext';

function UserEducation({defaultEdu}) {
const {setLoading} = useContext(LoaderContext)
const {BackEndDomain} = useContext(BackendContext)
const {setActiveModal} = useContext(ModalContext)

const AddEducation = async(e)=>{
e.preventDefault();
console.log("add edu")
const data = new FormData(e.target)
const formdata = Object.fromEntries(data);
console.log(formdata);
if(!formdata){
  toast.error("fill all the fields.")
}
if(formdata.startingYear >= formdata.passingYear){
  console.log("bsnt")
  toast.error("passing year must be greater then starting year")
  return
}
// if(formdata.resultType === "cgpa10"){
//   if(Number(formdata?.result) >=10){
// toast.error("value must be below 10 for CGPA 10")
// return
//   }
// }

switch(formdata.resultType){
  case "cgpa10":
    if(Number(formdata?.result) >=10){toast.error("value must be below 10 for CGPA 10"); return};
    break;
  case "cgpa4":
    if(Number(formdata?.result) >=4){toast.error("value must be below 4 for CGPA 4"); return};
    break;
  case "percent":
    if(Number(formdata?.result) >=100){toast.error("value must be below 100 for percentage marks"); return};
    break;
  default:
    toast.success("all ok")
}

const token = localStorage.getItem("token")

try{
  setLoading(true)
const res = await axios.post(`${BackEndDomain}/api/education-add`, formdata, {headers :{authorization : token}});
console.log(res?.data)
toast.success(res?.data?.message)
}catch(err){
console.log(err);
console.log(err.message)
}finally{
  setLoading(false)
  setActiveModal(null)
}
}
  
//education update
const UpdateEducation = async(e)=>{
  e.preventDefault();
  console.log("updated")
  const data = new FormData(e.target)
const formdata = Object.fromEntries(data);
console.log(formdata);
if(!formdata){
  toast.error("fill all the fields.")
}
if(formdata.startingYear >= formdata.passingYear){
  console.log("bsnt")
  toast.error("passing year must be greater then starting year")
  return
}
// if (){
//   toast.error("nothing changed")
//   return
// }

const updated = {...formdata, EduId : defaultEdu?._id}
console.log(updated)
const token = localStorage.getItem("token")

try{
  setLoading(true)
const res = await axios.post(`${BackEndDomain}/api/education-update`, updated, {headers :{authorization : token}});
console.log(res?.data)
toast.success(res?.data?.message)
}catch(err){
console.log(err);
console.log(err.message)
}finally{
  setLoading(false)
  setActiveModal(null)
}
}

const year = ()=>{
  let start = 1950;
  let end = new Date().getFullYear()
  let years = []
  for (let i=end; i>start; i--){
    years.push(i)
  }
  return years
}
const startYear = year();
let end = new Date().getFullYear()
const passYear = [end+4, end+3, end+2, end+1, ...startYear]
// console.log(passYear)
  return (
    <form onSubmit={defaultEdu ? UpdateEducation : AddEducation} className='text-sm overflow-hidden'>

<div className='font-bold text-xl mb-4 text-blue-900'>Add Education Details</div>

      <label htmlFor='courseType' className='' >CourseType </label>
      <input type="text" name="courseType" defaultValue={defaultEdu ? defaultEdu?.courseType : ""}  className='outline-none bg-gray-5 w-full p-1 border rounded-md  '/> <br />

      <label htmlFor='course' className=''>Course</label>
      <input type="text" name="course" defaultValue={defaultEdu ? defaultEdu?.course : ""}  className='outline-none bg-gray-5 w-full p-1 border rounded-md  '/> <br /> 

      <label htmlFor='stream' className='' >Stream </label>
      <input type="text" name="stream" defaultValue={defaultEdu ? defaultEdu?.stream : ""}  className='outline-none bg-gray-5 w-full p-1 border rounded-md  '/> <br /> 

<p className='py-2'>
      <label htmlFor='startingYear' className='' > Starting Year </label>
      <select
  required
  max={end-4}
  name="startingYear"
  defaultValue={defaultEdu ? defaultEdu.startingYear : ""}
  className="outline-none bg-white border rounded-sm max-h-40 overflow-y-auto"
>
  <option disabled value=""> select </option>
  {startYear.map((yr, i) => (
    <option key={i} className="bg-white" value={yr}>
      {yr}
    </option>
  ))}
</select>


&nbsp; &nbsp; &nbsp; &nbsp;

      <label htmlFor='passingYear' className='' >Passing Year </label> 
      <select required name="passingYear" defaultValue={defaultEdu ? defaultEdu.passingYear : ""}
        className="outline-none bg-white border rounded-sm max-h-40 overflow-y-auto">
        <option  disabled value="">select</option>
        {passYear.map((yr, i)=><option key={i} className='bg-white' value={yr}>{yr}</option>)}
        </select>
</p>

      <p className='py-2'>
      <label htmlFor='resultType' className=''>Result Mode </label>
      <select required name="resultType" defaultValue={defaultEdu ? defaultEdu.resultType : ""}
        className='outline-none bg-gray-5 border rounded-sm text-sm '>
        <option disabled value="">Result Type</option>
        <option value="cgpa10">CGPA 10</option>
        <option value="cgpa4">CGPA 4</option>
        <option value="percent">Percent %</option>
        </select> 
        &nbsp; &nbsp; &nbsp; &nbsp;
      <label htmlFor='result' className='' >Result </label>
      <input type="text" name="result" defaultValue={defaultEdu ? defaultEdu.result : ""}  className='outline-none bg-gray-5 p-1 border rounded-md  '/> <br /> 
      </p>

      <label htmlFor='institute' className=''>Institute</label>
      <input type="text" name="institute" defaultValue={defaultEdu ? defaultEdu.institute : ""}  className='outline-none bg-gray-5 w-full p-1 border rounded-md  '/> <br /> 

      <label required htmlFor="mode"> Study Mode </label> <br />
      <input type="radio" defaultChecked={defaultEdu?.mode === "regular" ? true : false} name="mode" value={"regular"} className='outline-none bg-gray-5  p-1 border rounded-md inline-block '/>
      {" Regular "} 
      <input type="radio" defaultChecked={defaultEdu?.mode === "private" ? true : false} name="mode" value={"private"} className='outline-none bg-gray-5  p-1 border rounded-md inline-block '/>
      {" Private "}
      <input type="radio" defaultChecked={defaultEdu?.mode === "online" ? true : false} name="mode" value={"online"} className='outline-none bg-gray-5  p-1 border rounded-md  inline-block'/>
      {" Online "}
      <input type="radio" defaultChecked={defaultEdu?.mode === "distance" ? true : false} name="mode" value={"distance"} className='outline-none bg-gray-5  p-1 border rounded-md  inline-block'/>
      {" Distance "}
<br />
      <button className='px-3 p-1 rounded-md  bg-blue-200 hover:bg-amber-500 hover:text-white float-right'>{defaultEdu ? "Update" : "Add"}</button>
    </form>
  )
}

export default UserEducation
