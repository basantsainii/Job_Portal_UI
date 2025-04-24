import { createContext, useMemo, useState } from "react";

export const BackendContext = createContext();

export const BackendContextProvider = (prop)=>{

  // const BackEnd = "http://localhost:3000";
  const BackEndDomain = "https://find-employee.onrender.com";


  const BackEndDomain = useMemo(()=>(BackEnd), [BackEnd]);

  return(
    <BackendContext.Provider value={{BackEndDomain}}>
      {prop.children}
    </BackendContext.Provider>
  )
}