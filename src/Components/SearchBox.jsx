import { select } from "framer-motion/client";
import React from "react";

function SearchBox({SetClass, searchButton}) {
  return (
    <>
      <div className={`${SetClass ? SetClass : "mt-5 p-2 px-4 w-full max-w-md mx-auto md:mx-0 shadow-md rounded-full bg-white "} flex items-center`}>
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i> 
            <input 
              type="text" 
              className="outline-none flex-grow px-2 text-sm md:text-base bg-inherit" 
              placeholder="Search by Skills, Company, or Job Title"
            />
            <input 
              type="submit" 
              value="Search" 
              className={`bg-yellow-500 text-white font-medium rounded-full px-2 py-1 text-xs sm:text-sm hover:scale-105 transition ${searchButton ? searchButton : ""}`}
            />
          </div>
    </>
  );
}

export default SearchBox;
