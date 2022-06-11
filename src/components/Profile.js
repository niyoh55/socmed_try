import React from "react";

const Profile = () => {
  return (
    <div className="h-[600px] w-96 bg-white shadow-2xl rounded-2xl border-separate overflow-auto">
      <div className="flex flex-col h-[50%]">
        <div className=" flex-[2]">
          <img
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            className="max-w-full h-auto"
            alt="..."
          />
        </div>
        <div className="flex justify-center items-center z-50 h-10">
          <img
            className="w-32 h-32 rounded-full "
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            alt="Rounded avatar"
          />
        </div>
        <div className="flex flex-col justify-center items-center flex-[3]  mt-12">
          <p className="text-2xl font-semibold">Niyoh Edwyn A. Villanueva</p>
          <p className="text-xl font-light">Frontend Developer</p>
        </div>
      </div>

      <div className="justify-center flex flex-row items-center mt-10">
        <div className="w-[80%] h-[2px] bg-gray-300 "></div>
      </div>

      <div className="flex flex-row justify-around items-center  h-[30%] py-2">
        <div className="flex flex-col justify-center items-center flex-[2]">
          <p className="text-xl font-bold">6,900</p>
          <p className="font-light text-lg">Followers</p>
        </div>
        <div className="h-full bg-gray-300 w-[2px] flex-initial"></div>
        <div className="flex flex-col justify-center items-center flex-[2]">
          <p className="text-xl font-bold">6,900</p>
          <p className="font-light text-lg">Following</p>
        </div>
      </div>

      <div className="justify-center flex flex-row items-center">
        <div className="w-[80%] h-[2px] bg-gray-300 "></div>
      </div>

      <div className="flex justify-center items-center py-4">
        <p className="text-3xl text-orange-300">My Profile</p>
      </div>
    </div>
  );
};

export default Profile;
