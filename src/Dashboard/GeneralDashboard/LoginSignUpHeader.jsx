import React from "react";
import { Link, NavLink } from "react-router-dom";
import jobportal2 from "../../assets/jobportal2.gif";

function LoginSignUpHeader() {
  const midNav =
    "hover:cursor-pointer hover:text-white hover:[text-shadow:_0px_0px_10px_red] px-1 hover:outline-emerald-800 hover:outline-1 rounded-xl";
  const active =
    "text-white [text-shadow:_0px_0px_10px_red] outline-emerald-800 outline-1";
  return (
    <>
      <div className="flex justify-between items-center p-2 shadow-[0px_0px_10px_0px_black]">
        <div className="">
          <Link to="/home">
            <img src={jobportal2} className="h-10" alt="Employee portal" />
          </Link>
        </div>
        <div className="flex justify-between gap-5">
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="/home"
            >
              Home{" "}
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="/search-job"
            >
              Search Jobs
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="/search-by-companies"
            >
              Companies
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="/employee-dashboard/applied"
            >
              Applied
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : "outline-none"
              }
              to="/about-us"
            >
              About Us
            </NavLink>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <Link to='/sign-up'><button>SignUp</button></Link>
          </div>
          <div>
            <Link to='/login'><button>Login</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignUpHeader;
