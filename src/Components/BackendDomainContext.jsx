import { createContext } from "react";

export const BackendContext = createContext();

export const BackendContextProvider = (prop)=>{

  const BackEndDomain = "https://find-employee.onrender.com" || "http://localhost:3000";
  // const [backEndDomain, setBackEndDomain] = useState(BackEndDomain);


  return(
    <BackendContext.Provider value={{BackEndDomain}}>
      {prop.children}
    </BackendContext.Provider>
  )
}