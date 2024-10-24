import React from "react";
import helena from '../assets/helena.png';

const Helena = () => {
  return (
    <div className="w-full mt-24 bg-black text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b-2 border-gray-600 py-8">
        {/* Column 1: h1 */}
        <div className="col-span-2">
          <h1 className="text-3xl font-semibold mb-4">
            Just ask Helena
          </h1>
  
          {/* Column 2: Paragraph with button */}
          <p className="mb-6">
            Discover Helena, the future AI—your go-to source for instant knowledge, brilliant ideas, and smart solutions, all just one click away. Think faster, create smarter, and get more done with the power of AI at your fingertips!
          </p>
  
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 cursor-pointer">
            <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Learn It</span>
          </button>
        </div>
  
        {/* Column 3: Image */}
        <div className="col-span-1 flex justify-center">
          <img 
            src={helena} 
            alt="Helena" 
            className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 max-w-full" 
          />
        </div>
      </div>
    </div>
  );
  
};


export default Helena;
