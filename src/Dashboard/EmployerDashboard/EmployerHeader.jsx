
import React from 'react'
import {useNavigate} from 'react-router-dom';
import SearchBox from '../../Components/SearchBox';


function EmployerHeader() {
const navigate = useNavigate();

  const logOut = ()=>{
    localStorage.removeItem("token"); 
    navigate('/'); 
    setDisplayProfile(false);
    setBackDrop(false); 
    toast.success("logOut Successfully")
  }



  return (
    <div  className='h-12 flex justify-between px-2 items-center shadow-md bg-white'>
      {/* search box */}
      <div>
          <SearchBox SetClass={"p-2 h-full bg-slate-100 rounded-md"} searchButton={"hidden"}></SearchBox>
        </div>

        {/* Icons & Profile */}
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-gear border border-gray-400 rounded-full p-2 w-8 h-8 text-center hover:text-blue-500 cursor-pointer hidden md:block"></i>
          <i className="fa-regular fa-bell border border-gray-400 rounded-full p-2 w-8 h-8 text-center hover:text-blue-500 cursor-pointer hidden md:block"></i>

          {/* Profile Image */}
          <div
            // onClick={() => {
            //   setDisplayProfile(true);
            //   setBackDrop(true);
            // }}
            className="rounded-full bg-blue-950 w-8 h-8 overflow-hidden cursor-pointer"
          >
            <img 
            onClick={logOut}
            // src={props.employeeDetails.dp} 
            alt="Profile" />
          </div>
        </div>
    </div>
  )
}

export default EmployerHeader
