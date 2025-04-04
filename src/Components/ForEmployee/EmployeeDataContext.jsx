import { useContext, createContext, useState } from "react";

export const EmployeeData = createContext();

export const EmployeeDataProvider = (prop)=>{
const [employeeData, setEmployeeData] = useState([]);
return (
  <EmployeeData.Provider value= {{employeeData, setEmployeeData}}>
    {prop.children} 
  </EmployeeData.Provider>
)
}
