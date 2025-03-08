import { createContext, useContext, useState } from "react";

export const ProfileBackDrop = createContext();

export const ProfileBackDropProvider = (prop)=>{
    const [backDrop, setBackDrop] = useState(false)

    return(
        <ProfileBackDrop.Provider value={{backDrop, setBackDrop}}>
            {prop.children}
        </ProfileBackDrop.Provider>
    )
}