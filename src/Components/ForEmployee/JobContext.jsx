import { Children, createContext, useState } from "react";


export const JobContext = createContext();

export const JobContextProvider = ({children})=>{
  const [jobs, setJobs] = useState([]);
  const [fetchJobs, setFetchJobs] = useState(false);
// console.log(jobs)
  return (<JobContext.Provider value={{jobs, setJobs, fetchJobs, setFetchJobs}}>
    {children}
  </JobContext.Provider>)
}