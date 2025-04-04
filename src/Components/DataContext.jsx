import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = (prop)=>{
const [data, setData] = useState(null);
// console.log(data);
    return(
        <DataContext.Provider value={{data, setData}}>
            {prop.children}
        </DataContext.Provider>
    )
}
