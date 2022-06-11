import React from "react";
import Profile from "../components/Profile";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="w-screen h-screen px-10 py-5">
      <SearchBar />
      <Profile />
    </div>
  );
};

export default Home;
