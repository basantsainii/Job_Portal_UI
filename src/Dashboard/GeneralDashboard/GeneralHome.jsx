import React, { useContext, useEffect, useState } from "react";
import SearchBox from "../../Components/SearchBox";
import job_portal_about from "../../assets/job_portal_about.svg";
import jobSearch from "../../assets/jobSearch.png";
import jobSearch1 from "../../assets/jobSearch.jpg";
import CompanyCrousal from "../../Components/CompanyCrousal";
import JobCard from "../../Components/ForEmployee/JobCard";
import { JobContext } from "../../Components/ForEmployee/JobContext";



// Highlight Card Component
const HighlightCard = ({ highlight }) => {
  return (
    <div className={`text-center p-4 rounded-md w-full sm:w-[45%] md:w-[22%] ${highlight?.background}`}>
      <img src={highlight?.img || jobSearch1} alt={highlight?.word} className="mx-auto w-12 md:w-16" />
      <p className="text-lg md:text-xl font-semibold text-blue-900">{highlight?.word}</p>
      <p className="text-sm md:text-base">{highlight?.description}</p>
    </div>
  );
};

function GeneralHome() {
  const {jobs, setJobs} = useContext(JobContext)
// const [jobs, setJobs] = useState([]);
console.log(jobs);
// const {employeeData} = useContext(EmployeeData)
// console.log(employeeData)
  const Highlights = [
    { word: "Preparation", description: "Up Your Interview Success Rate", background: "bg-yellow-100" },
    { word: "Learn", description: "UpSkill to get ahead", background: "bg-green-100" },
    { word: "Network", description: "Grow with peers & mentors", background: "bg-red-100" },
    { word: "Highlight", description: "Stand Out to Employers", background: "bg-blue-100" },
  ];

  return (
    <div>
      {/*  Search  Box  Header  */}
      <div className="bg-gray-50 p-5 lg:p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left md:gap-4 lg:gap-6 overflow-x-hidden">
  
  {/*  Left  Image  */}
  <img src={job_portal_about} alt="Job Portal" className="w-40 sm:w-48 md:w-52 lg:w-64" />

  {/*  Content  Section  */}
  <div className="w-full flex flex-col justify-between items-center">
    <h1 className="font-bold  text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-blue-900 leading-tight">
      Connecting Talent with Opportunity.
    </h1>

    {/*  Search  Bar  */}
    <SearchBox></SearchBox>
  </div>

  {/*  Right  Image  */}
  <img src={jobSearch} alt="Job Search" className="w-40 sm:w-48 md:w-52 lg:w-64" />

</div>


      {/*  Highlights  Section  */}
      <div className="mt-6 px-4">
        <h1 className="font-bold text-2xl md:text-3xl text-blue-900 text-center">
          The Future of Hiring Starts Here.
        </h1>
        <br />
        <div className="flex flex-wrap justify-center gap-4">
          {Highlights.map((highlight, index) => (
            <HighlightCard key={index} highlight={highlight} />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="w-[90%] m-auto mt-10 text-center">
        <img src={jobSearch1} alt="Job Search" className="m-auto w-full md:w-2/3" />
        <p className="text-blue-900 text-sm md:text-base w-full md:w-2/3 m-auto">
          <span className="font-bold">Find Employee</span> is an innovative online job platform designed to connect job seekers with the right career opportunities and employers with the best talent. Whether you're a fresh graduate looking for your first job, an experienced professional aiming for career growth, or a company seeking skilled employees, our platform simplifies the hiring process with advanced search filters, AI-driven recommendations, and seamless communication tools.
        </p>
      </div>

      {/* Job Listings */}
      <div className="md:w-[90%] w-full m-auto p-4 mt-6">
        <p className="text-lg md:text-xl font-bold text-blue-900 ml-3 my-2 text-center md:text-left">
          Find the perfect job for You..
        </p>
         {jobs?.length>0 && <JobCard app={false} Jobs={jobs?.slice(0,6) || []}  /> || <p>no jobs found</p>} 
        
      </div>


      <div className="py-12">
      <CompanyCrousal></CompanyCrousal>
      </div>



    </div>
  );
}

export default GeneralHome;
