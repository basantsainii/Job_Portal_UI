import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import jobportal2 from "../../assets/jobportal2.gif";
import { div } from "framer-motion/client";

function LoginSignUpHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const midNav = "hover:cursor-pointer hover:text-blue-800 hover:[text-shadow:_0px_0px_0px_black] px-1";
  const active = "text-blue-800 font-bold [text-shadow:_0px_0px_0px_black]";

  return (
    <>
      <div className="flex justify-between items-center p-3 shadow-xl px-4 bg-white">
        {/* Logo */}
        <div>
          <Link to="/home">
            <img src={jobportal2} className="h-10" alt="Employee portal" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between gap-5">
          <div className={`${midNav}`}>
            <NavLink className={({ isActive }) => (isActive ? `${active}` : "outline-none")} to="/home">
              Home
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink className={({ isActive }) => (isActive ? `${active}` : "outline-none")} to="/search-job">
              Search Jobs
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink className={({ isActive }) => (isActive ? `${active}` : "outline-none")} to="/search-by-companies">
              Companies
            </NavLink>
          </div>
          <div className={`${midNav}`}>
            <NavLink className={({ isActive }) => (isActive ? `${active}` : "outline-none")} to="/about-us">
              About Us
            </NavLink>
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-5">
          <Link to='/sign-up'>
            <button className=" border border-blue-600 text-blue-800 px-4 py-1 rounded-md hover:bg-blue-50">SignUp</button>
          </Link>
          <Link to='/login'>
            <button className=" border border-green-600 text-green-800 px-4 py-1 rounded-md hover:bg-green-50">Login</button>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu with Motion */}
      {menuOpen && (
        <div>
        <div onClick={() => setMenuOpen(false)} className="bg-black opacity-50 fixed z-10 inset-0"></div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 left-0 w-1/2 h-full bg-white shadow-lg p-5 z-50 md:hidden"
        >
          <button onClick={() => setMenuOpen(false)} className="text-2xl absolute top-4 right-4">✕</button>
          
          <div>
          <Link to="/home">
            <img src={jobportal2} className="h-10" alt="Employee portal" />
          </Link>
        </div>

          <nav className="flex flex-col gap-y-1 mt-10">
            <NavLink className={({ isActive }) => (isActive ? `${active} block bg-blue-100 rounded-sm p-3` : `${midNav} block hover:bg-blue-100 rounded-sm p-3`)} to="/home" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? `${active} block bg-blue-100 rounded-sm p-3` : `${midNav} block hover:bg-blue-100 rounded-sm p-3`)} to="/search-job" onClick={() => setMenuOpen(false)}>Search Jobs</NavLink>
            <NavLink className={({ isActive }) => (isActive ? `${active} block bg-blue-100 rounded-sm p-3` : `${midNav} block hover:bg-blue-100 rounded-sm p-3`)} to="/search-by-companies" onClick={() => setMenuOpen(false)}>Companies</NavLink>
            <NavLink className={({ isActive }) => (isActive ? `${active} block bg-blue-100 rounded-sm p-3` : `${midNav} block hover:bg-blue-100 rounded-sm p-3`)} to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink>

            <div className="flex flex-col gap-3 mt-5">
              <Link to='/sign-up'>
                <button className="w-full border border-blue-800 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-50 hover:scale-[1.02]">SignUp</button>
              </Link>
              <Link to='/login'>
                <button className="w-full border border-green-800 text-green-800 px-4 py-2 rounded-md  hover:bg-green-50 hover:scale-[1.02]">Login</button>
              </Link>
            </div>
          </nav>
        </motion.div>
        </div>
      )}
    </>
  );
}

export default LoginSignUpHeader;
