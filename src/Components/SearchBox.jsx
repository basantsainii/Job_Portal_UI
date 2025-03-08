import React from "react";

function SearchBox() {
  return (
    <>
      <div className="mt-5 flex items-center border rounded-full bg-white shadow-md p-2 px-4 w-full max-w-md mx-auto md:mx-0">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i> 
            <input 
              type="text" 
              className="outline-none flex-grow px-2 text-sm md:text-base" 
              placeholder="Search by Skills, Company, or Job Title"
            />
            <input 
              type="submit" 
              value="Search" 
              className="bg-yellow-500 text-white font-medium rounded-full px-2 py-1 text-xs sm:text-sm hover:scale-105 transition"
            />
          </div>
    </>
  );
}

export default SearchBox;
