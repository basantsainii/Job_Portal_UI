import React from "react";
import SearchBox from "../../Components/SearchBox";
import job_portal_about from "../../assets/job_portal_about.svg";
import jobSearch from "../../assets/jobSearch.png";
import jobSearch1 from "../../assets/jobSearch.jpg";
import CompanyCrousal from "../../Components/CompanyCrousal";






const JobCard = ({ job }) => {
  return (
    <div className="w-full sm:w-[45%]  md:min-w-[30%] lg:min-w-[25%] lg:max-w-[32%] bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
      
      {/* Header: Company Logo & Apply Button */}
      <div className="flex justify-start gap-2  items-center">
        <img
          src={job.company_logo}
          alt={`${job.company} logo`}
          className="w-12 h-12 object-cover rounded-md border border-gray-300"
        />
        <div className="h-10 border">

        </div>
        {/* Job Info */}
        <div>

      <h2 className="text-xl font-semibold text-blue-900">{job.title}</h2>
      <p className="text-sm text-gray-600">by <span className="font-medium">{job.company}</span></p>
        </div>
        
      </div>

      

      {/* Job Details */}
      <div className="mt-3 text-gray-700 space-y-1 text-sm">
        <p className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot text-blue-800"></i> {job.location}
        </p>
        <p className="flex items-center gap-2">
          <i className="fa-solid fa-briefcase text-blue-800"></i> {job.experience}
        </p>
        <p className="flex items-center gap-2">
          <i className="fa-solid fa-eye text-blue-800"></i> {job.applicants} Applicants
        </p>
      </div>

      {/* Post Time Badge */}
      <div className="mt-3 text-xs text-gray-500 italic">{job.post_time}</div>
      <button className="absolute bottom-3 right-4 text-sm  px-3 py-1 border border-yellow-500 text-yellow-800 hover:text-yellow-100 hover:bg-yellow-500 rounded-md transition">
          Apply
        </button>
    </div>
  );
};












// Highlight Card Component
const HighlightCard = ({ highlight }) => {
  return (
    <div className={`text-center p-4 rounded-md w-full sm:w-[45%] md:w-[22%] ${highlight.background}`}>
      <img src={highlight.img || jobSearch1} alt={highlight.word} className="mx-auto w-12 md:w-16" />
      <p className="text-lg md:text-xl font-semibold text-blue-900">{highlight.word}</p>
      <p className="text-sm md:text-base">{highlight.description}</p>
    </div>
  );
};

function GeneralHome() {
  const Highlights = [
    { word: "Preparation", description: "Up Your Interview Success Rate", background: "bg-yellow-100" },
    { word: "Learn", description: "UpSkill to get ahead", background: "bg-green-100" },
    { word: "Network", description: "Grow with peers & mentors", background: "bg-red-100" },
    { word: "Highlight", description: "Stand Out to Employers", background: "bg-blue-100" },
  ];

  const Jobs = [
    { title: "Web Developer", company: "Find Employee", experience: "2-4 years", location: "Dehradun", post_time: "1 day ago", company_logo: job_portal_about, applicants: "5" },
    { title: "Front End react.js", company: "Brillica Services", experience: "Fresher", location: "Dehradun", post_time: "2 days ago", company_logo: jobSearch1, applicants: "15" },
    { title: "BackEnd Node.js", company: "Brillica Services", experience: "2-4 years", location: "Dehradun", post_time: "5 days ago", company_logo: jobSearch1, applicants: "3" },
    { title: "UI/UX Designer", company: "Find Employee", experience: "Fresher", location: "Mohali", post_time: "1 day ago", company_logo: jobSearch1, applicants: "5" },
    { title: "Digital Marketing", company: "Zepto", experience: "2 years", location: "Saharanpur", post_time: "5 days ago", company_logo: job_portal_about, applicants: "56" },
    { title: "Web Development", company: "Find Employee", experience: "2-4 years", location: "Dehradun", post_time: "1 day ago", company_logo: job_portal_about, applicants: "5" },
  ];

  return (
    <div>
      {/* Search Box Header */}
      <div className="bg-gray-50 p-5 lg:p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left md:gap-4 lg:gap-6 overflow-x-hidden">
  
  {/* Left Image */}
  <img src={job_portal_about} alt="Job Portal" className="w-40 sm:w-48 md:w-52 lg:w-64" />

  {/* Content Section */}
  <div className="w-full flex flex-col justify-between items-center">
    <h1 className="font-bold  text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-blue-900 leading-tight">
      Connecting Talent with Opportunity.
    </h1>

    {/* Search Bar */}
    <SearchBox></SearchBox>
  </div>

  {/* Right Image */}
  <img src={jobSearch} alt="Job Search" className="w-40 sm:w-48 md:w-52 lg:w-64" />

</div>


      {/* Highlights Section */}
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
          Find the perfect job for You
        </p>
        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          {Jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>


      <div className="py-12">
      <CompanyCrousal></CompanyCrousal>
      </div>



    </div>
  );
}

export default GeneralHome;
