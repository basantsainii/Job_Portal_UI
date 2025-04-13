import React, { useContext } from 'react'
import { ModalContext } from '../Modal/ModalContext'
import toast from 'react-hot-toast';
import { LoaderContext } from './LoaderContext';
import axios from 'axios';
import { BackendContext } from './BackendDomainContext';
BackendContext
function Confirmation({defaultEdu}) {

  const {setActiveModal, edu} =  useContext(ModalContext);
const {setLoading} = useContext(LoaderContext);
const {BackEndDomain} = useContext(BackendContext);

  const deleteEdu  = async ()=>{
    console.log(edu)
    console.log(defaultEdu)

  const eduId = edu?._id;
  if(!eduId){
    toast.error("something went wrong")
  }

  const token = localStorage.getItem("token")

try{
setLoading(true)
const res = await axios.get(`${BackEndDomain}/api/education-delete/${eduId}`, {headers :{authorization : token}})
console.log(res)
if(res.status === 200){
  setActiveModal(null)
  toast.success("deleted successfully")
}
}catch(err){
console.log(err?.response?.data)
toast.error(err?.response?.data?.message)
}finally{
  setLoading(false)
}


  }

  return (
    <>
<p className='px-2 mb-2 text-xl font-bold text-blue-900'>Are you sure to Delete it? </p>    
{/* <p>you can also update it</p> */}
<ul className='flex justify-end  gap-4 p-1'>
  <li onClick={()=>setActiveModal(null)} className='px-2 py-1 border border-amber-300 hover:bg-amber-500 rounded-md hover:text-white cursor-pointer hover:scale-105'>Cancel</li>
  <li onClick={deleteEdu} className='px-2 py-1 border border-amber-300 hover:bg-amber-500 rounded-md hover:text-white cursor-pointer hover:scale-105'>Delete</li>
</ul>
</>
  )
}

export default Confirmation
