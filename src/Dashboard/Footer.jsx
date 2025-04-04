import React from "react";
import { Link } from "react-router-dom";
import jobPortal2 from "../assets/jobportal2.gif";

function EmployeeFooter() {
  const hover =
    "hover:text-white hover:[text-shadow:0px_0px_5px_red] hover:cursor-pointer";

  return (
    <>
      <footer className="bg-white shadow-[0px_0px_1px_0px_black] p-4 md:p-6">
        {/* Main Footer Container */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 text-center md:text-left">
          {/* Logo */}
          <div>
            <Link to="home">
              <img src={jobPortal2} className="h-12 md:h-16 mx-auto md:mx-0" alt="Employee portal" />
            </Link>
          </div>

          {/* Links Section 1 */}
          <div className="flex flex-col gap-2">
            <Link to="about-us" className={`${hover}`}>About Us</Link>
            <Link to="privacy-policy" className={`${hover}`}>Privacy Policy</Link>
            <Link to="terms-and-conditions" className={`${hover}`}>Terms & Conditions</Link>
          </div>

          {/* Links Section 2 */}
          <div className="flex flex-col gap-2">
            <Link to="help-center" className={`${hover}`}>Help Centre</Link>
            <Link to="feedback" className={`${hover}`}>Feedback</Link>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold mb-2">Connect With Us</div>
            <div className="flex gap-3 justify-center md:justify-start">
              <i className={`fa-brands fa-facebook ${hover} text-xl`}></i>
              <i className={`fa-brands fa-instagram ${hover} text-xl`}></i>
              <i className={`fa-brands fa-linkedin ${hover} text-xl`}></i>
              <i className={`fa-brands fa-x-twitter ${hover} text-xl`}></i>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="text-center text-sm mt-4 text-gray-500">
          &copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default EmployeeFooter;
