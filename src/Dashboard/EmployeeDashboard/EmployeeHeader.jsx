import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import jobportal2 from "../../assets/jobportal2.gif";
import ProfileCard from "./Profile/ProfileCard";
import { ProfileContext } from "../../Components/ForEmployee/ProfileContext";
import { ProfileBackDrop } from "../../Components/ForEmployee/ProfileBackDrop";

function EmployeeHeader(props) {
  const { setDisplayProfile, displayProfile } = useContext(ProfileContext);
  const { setBackDrop } = useContext(ProfileBackDrop);
  const [menuOpen, setMenuOpen] = useState(false);

  const midNav =
    "hover:cursor-pointer hover:text-black hover:[text-shadow:_0px_0px_1px_black] px-1 block hover:bg-blue-100 rounded-sm p-3";
  const active = "text-blue-900 font-bold [text-shadow:_0px_0px_0px_black] block bg-blue-100 rounded-sm p-3";

  return (
    <>
      <header className="bg-white flex justify-between items-center p-3 shadow-md relative z-[] px-4">
        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <i className="fa-solid fa-bars text-2xl text-blue-900"></i>
          </button>
        </div>

        {/* Logo */}
        <div className="mr-auto ml-5 md:mr-0 md:ml-0">
          <Link to="/employee-dashboard/home">
            <img
              src={jobportal2}
              className="h-8 md:h-10"
              alt="Employee portal"
            />
          </Link>
        </div>

        {/* Navigation Menu for Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <NavLink
            to="home"
            className={({ isActive }) => (isActive ? active : midNav)}
          >
            Home
          </NavLink>
          <NavLink
            to="jobs"
            className={({ isActive }) => (isActive ? active : midNav)}
          >
            Jobs
          </NavLink>
          <NavLink
            to="companies"
            className={({ isActive }) => (isActive ? active : midNav)}
          >
            Companies
          </NavLink>
          <NavLink
            to="applied"
            className={({ isActive }) => (isActive ? active : midNav)}
          >
            Applied
          </NavLink>
          <NavLink
            to="about-us"
            className={({ isActive }) => (isActive ? active : midNav)}
          >
            About Us
          </NavLink>
        </div>

        {/* Icons & Profile */}
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-gear border border-gray-400 rounded-full p-2 w-8 h-8 text-center hover:text-blue-500 cursor-pointer hidden md:block"></i>
          <i className="fa-regular fa-bell border border-gray-400 rounded-full p-2 w-8 h-8 text-center hover:text-blue-500 cursor-pointer hidden md:block"></i>

          {/* Profile Image */}
          <div
            onClick={() => {
              setDisplayProfile(true);
              setBackDrop(true);
            }}
            className="rounded-full bg-blue-950 w-8 h-8 overflow-hidden cursor-pointer"
          >
            <img src={props.employeeDetails.dp} alt="Profile" />
          </div>
        </div>

        {/* Sliding Mobile Menu */}
        {menuOpen && (
          <>
            {/* Background Overlay (Click to close menu) */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            ></div>

            {/* Sliding Sidebar Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed top-0 left-0 h-full w-1/3 bg-white shadow-lg p-5 z-50 md:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-xl text-gray-600 hover:text-red-500"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Logo */}
              <Link to="/employee-dashboard/home">
                <img
                  src={jobportal2}
                  className="h-8 md:h-10"
                  alt="Employee portal"
                />
              </Link>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-2 mt-5">
                <NavLink
                  to="home"
                  className={({ isActive }) =>
                    isActive
                      ? `${active} block bg-blue-100 rounded-sm p-3`
                      : `${midNav} block hover:bg-blue-100 rounded-sm p-3`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="jobs"
                  className={({ isActive }) =>
                    isActive
                      ? `${active} block bg-blue-100 rounded-sm p-3`
                      : `${midNav} block hover:bg-blue-100 rounded-sm p-3`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="companies"
                  className={({ isActive }) =>
                    isActive
                      ? `${active} block bg-blue-100 rounded-sm p-3`
                      : `${midNav} block hover:bg-blue-100 rounded-sm p-3`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Companies
                </NavLink>
                <NavLink
                  to="applied"
                  className={({ isActive }) =>
                    isActive
                      ? `${active} `
                      : `${midNav}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Applied
                </NavLink>
                <NavLink
                  to="about-us"
                  className={({ isActive }) =>
                    isActive
                      ? `${active} block bg-blue-100 rounded-sm p-3`
                      : `${midNav} block hover:bg-blue-100 rounded-sm p-3`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </nav>
            </motion.div>
          </>
        )}

        {/* Profile Card (When Open) */}
        {displayProfile && (
          <ProfileCard displayProfile={props.employeeDetails} />
        )}
      </header>
    </>
  );
}

export default EmployeeHeader;
