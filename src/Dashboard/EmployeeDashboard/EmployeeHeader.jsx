import { Link, NavLink } from "react-router-dom";
import jobportal2 from "../../assets/jobportal2.gif"
function EmployeeHeader() {
  const midNav =
    "hover:cursor-pointer hover:text-white hover:[text-shadow:_0px_0px_10px_red] px-1 hover:outline-emerald-800 hover:outline-1 rounded-xl";
  const active =
    "text-white [text-shadow:_0px_0px_10px_red] outline-emerald-800 outline-1";
  return (
    <>
      <div className="flex justify-between items-center p-2 shadow-[0px_0px_10px_0px_black]">
        <div className="">
          <Link to="/employee-dashboard/home">
            <img
              src={jobportal2}
              className="h-10"
              alt="Employee portal"
            />
          </Link>
        </div>
        <div className="flex justify-between gap-5">
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="home"
            >
              Home{" "}
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="jobs"
            >
              Jobs
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="companies"
            >
              Companies
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="applied"
            >
              Applied
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="about-us"
            >
              About Us
            </NavLink>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <i className="fa-solid fa-gear border border-gray-400 hover:border-white rounded-full p-1 w-7 h-7 text-center content-center hover:text-white hover:[text-shadow:0px_0px_5px_red] hover:cursor-pointer"></i>
          </div>
          <div>
            <i className="fa-regular fa-bell border border-slate-400 hover:border-white rounded-full p-1 w-7 h-7 text-center content-center hover:text-white hover:[text-shadow:0px_0px_5px_red] hover:cursor-pointer"></i>
          </div>
          <div className="rounded-full bg-blue-950 w-8 h-8 overflow-hidden"></div>
        </div>
      </div>
    </>
  );
}

export default EmployeeHeader;
