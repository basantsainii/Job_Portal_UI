import React from 'react'

function CreatedJobCard({Jobs}) {
  console.log(Jobs)
  return (
      <div className="flex flex-wrap md:justify-start gap-4  mb-5">
        {Jobs.map((job, index) => { 
          // console.log(job.applicants.length)
          return (
              <div key={index} className="w-[22rem] md:w-[24rem]  bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
        
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
              <p className="text-sm text-gray-600"><span className="font-medium">{job.company}</span></p>
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
                  <i className="fa-solid fa-eye text-blue-800"></i> {job.applicants.length} Applicants
                </p>
              </div>
        
              {/* Post Time Badge */}
              <div className="mt-3 text-xs text-gray-500 italic">{job.post_time}</div>

              <div className='absolute bottom-3 right-4'>
              {/* <button className=" text-sm  px-3 py-1 border border-yellow-500 text-yellow-800 hover:text-yellow-100 hover:bg-yellow-500 rounded-md transition">
                   edit</button> */}
              <button className=" text-sm  ml-2 px-3 py-1 border border-yellow-500 text-yellow-800 hover:text-yellow-100 hover:bg-yellow-500 rounded-md transition">
                  View
                </button>

              </div>
            </div>
            )}
            )}
      
      </div>
    );
}

export default CreatedJobCard
