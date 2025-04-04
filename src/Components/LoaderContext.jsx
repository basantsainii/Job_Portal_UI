import React, { createContext, useState } from 'react'

export const LoaderContext = createContext();


export const LoaderContextProvider  = (prop) => {
  const [loading, setLoading] = useState(false);
  // console.log(loading);
  return (
    <LoaderContext.Provider value={{loading, setLoading}}>
      {prop.children}
    </LoaderContext.Provider >
  )
}
