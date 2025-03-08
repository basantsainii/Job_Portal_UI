import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = (prop)=>{

    const [activeModal, setActiveModal] = useState(null)

    return(
        <ModalContext.Provider value={{activeModal, setActiveModal}} >
            {prop.children}
        </ModalContext.Provider>
    )
}