import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = (prop)=>{

    const [activeModal, setActiveModal] = useState(null)
    const [edu, setEdu] = useState(null)

    return(
        <ModalContext.Provider value={{activeModal, setActiveModal, edu, setEdu}} >
            {prop.children}
        </ModalContext.Provider>
    )
}