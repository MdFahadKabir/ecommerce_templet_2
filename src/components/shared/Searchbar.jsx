import React from "react";

const Searchbar = () => {
  return (
    <div>
      <form className="max-w-lg mx-auto">
        <div className="flex">




          <div className="relative ">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-[455px] z-20 text-sm text-gray-900 bg-gray-50  border-2  border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Search for items..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 px-4 p-2.5 text-sm font-medium h-full text-white bg-[#FF2157] hover:bg-[#fb124c]  border border-[#f90f49] focus:ring-4 focus:outline-none focus:ring-[#fe0745] "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
