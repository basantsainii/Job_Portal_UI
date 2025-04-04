import { createContext, useContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileContextProvider = (prop)=>{
    const [displayProfile, setDisplayProfile] = useState(false)

    return(
        <ProfileContext.Provider value={{displayProfile, setDisplayProfile}}>
            {prop.children}
        </ProfileContext.Provider>
    )
}