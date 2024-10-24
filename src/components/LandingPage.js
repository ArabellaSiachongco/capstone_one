import React from "react";

const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 p-7 z-20 flex flex-col justify-between h-screen">
      <div>
        <h1 className="font-merriweather font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          JUSTICE
        </h1>
        <h5 className="font-lato font-light text-lg sm:text-xl md:te`xt-2xl lg:text-3xl xl:text-4xl">
          REFORM
        </h5>
      </div>

      <div>
        <p className="font-merriweather font-light text-slg">A Comprehensive Legal Guide</p>
        <p className="font-lato font-light text-base mb-6">From Awareness to Impact</p>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 cursor-pointer">
            <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Learn It</span>
          </button>

      </div>
    </div>
  );
}

export default Navbar;