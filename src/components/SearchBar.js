import React from "react";
import { FaSearch, FaTwitter } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="flex flex-row mb-10 justify-center items-center w-96  gap-x-2">
      <div className="text-6xl">
        <FaTwitter />
      </div>
      <div className="flex flex-row h-10 bg-slate-200 rounded-md border-separate flex-1">
        <input
          placeholder="#explore"
          className="flex-1 bg-slate-200 px-2 py-1 text-lg"
        />
        <div className="flex justify-center items-center bg-orange-300 p-2">
          <button>
            <FaSearch className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
