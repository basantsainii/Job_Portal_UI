import axios from "axios";
import React, { useState, useEffect, memo } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EmployeeData } from "./EmployeeDataContext";
import { useContext } from "react";
import { LoaderContext } from "../LoaderContext";
import { JobContext } from "./JobContext";
import { BackendContext } from "../BackendDomainContext";



function JobCard({ Jobs, app }) {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(Jobs);
  const { employeeData } = useContext(EmployeeData);
  const { setLoading } = useContext(LoaderContext);
  const { fetchJobs, setFetchJobs } = useContext(JobContext);
  const { BackEndDomain } = useContext(BackendContext);
  // console.log(employeeData)
  console.log("Job Card");
  // console.log(loading)
  // console.log(jobs)

  // we canNot initially set  a state directly from prop
  // useEffect(()=>{
  //   if(Jobs?.length){
  // setJobs(Jobs.map((job)=>({...job, applied: false})));
  // }
  // }, [Jobs])

  // get real time
  // const date = Date.now();
  // // in locale string to saw in  locale date
  // console.log(date.toLocaleString());

  // // getting post time // updated time  from fetched data
  // const postdate = new Date(jobs[0].updatedAt);
  // console.log(postdate);

  // // difference b/w current date and post date
  // const duration = date - postdate;  // this gives in milliseconds
  // console.log(duration);

  // // converting into day by dividing  milliseconds of one day..
  // const days = Math.floor(duration/(1000 * 60 * 60 * 24))
  // console.log(days);

  // apply job api
  const ApplyJob = async (index) => {
    // console.log(index)
    const token = localStorage.getItem("token");
    const jobId = Jobs[index]._id;
    // console.log(jobId)
    if (!token) {
      navigate("/login");
      toast.error("please login first");
      return;
    }
    try {
      setLoading(true);
      const applyJob = await axios.post(
        `${BackEndDomain}/api/apply-job/${jobId}`,
        { id: jobId },
        { headers: { authorization: token } }
      );

      if (applyJob?.data?.success) {
        // navigate("");
        setFetchJobs(!fetchJobs)
      }
    } catch (e) {
      console.log(e);
      console.error(e.message);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-5">
      {
        Jobs?.length > 0 &&
          Jobs.map((job, index) => {
            // console.log(index)
            // console.log(job.applied)
            return (
              <div
                key={index}
                className="w-full sm:w-[45%]  md:min-w-[30%] lg:min-w-[25%] lg:max-w-[30%] bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
              >
                {/* Header: Company Logo & Apply Button */}
                <div className="flex justify-start gap-2  items-center">
                  <img
                    src={job.company_logo}
                    alt={`${job.company} logo`}
                    className="w-12 h-12 object-cover rounded-md border border-gray-300"
                  />
                  <div className="h-10 border"></div>
                  {/* Job Info */}
                  <div>
                    <h2 className="text-xl font-semibold text-blue-900">
                      {job.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      by <span className="font-medium">{job.company}</span>
                    </p>
                  </div>
                </div>

                {/* Job Details */}
                <div className="mt-3 text-gray-700 space-y-1 text-sm">
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-blue-800"></i>{" "}
                    {job.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-briefcase text-blue-800"></i>{" "}
                    {job.experience}
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-eye text-blue-800"></i>{" "}
                    {job.applicants?.length || 0} Applicants
                  </p>
                </div>

                {/* Post Time Badge */}
                <div className="mt-3 text-xs text-gray-500 italic">
                  {job.updatedAt} ago
                </div>

                {/* apply button */}
                {
                  <button
                    onClick={() => ApplyJob(index)}
                    disabled={
                      job?.applicants?.includes(employeeData?.id) ? true : false
                    }
                    className={`absolute bottom-3 right-4 text-sm  px-3 py-1 border  rounded-md transition ${
                      job?.applicants?.includes(employeeData?.id)
                        ? "border-slate-300 text-slate-500 hover:cursor-default"
                        : "hover:bg-yellow-500 hover:text-yellow-100 border-yellow-500 text-yellow-800 hover:cursor-pointer"
                    }`}
                  >
                    {job?.applicants?.includes(employeeData?.id) || app
                      ? "Applied"
                      : "Apply"}
                  </button>
                }
              </div>
            );
          })
        // || <p> no jobs found</p>
      }
    </div>
  );
}

export default memo(JobCard);
