import React, { createContext, useState } from 'react'

export const LoaderContext = createContext();


export const LoaderContextProvider  = (prop) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{loading, setLoading}}>
      {prop.children}
    </LoaderContext.Provider >
  )
}
