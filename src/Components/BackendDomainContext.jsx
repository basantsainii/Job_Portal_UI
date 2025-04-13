import { createContext, useState } from "react";

export const BackendContext = createContext();

export const BackendContextProvider = (prop)=>{

  const BackEndDomain = "http://localhost:3000";
  // const [backEndDomain, setBackEndDomain] = useState(BackEndDomain);
  // "https://find-employee.onrender.com"

  return(
    <BackendContext.Provider value={{BackEndDomain}}>
      {prop.children}
    </BackendContext.Provider>
  )
}