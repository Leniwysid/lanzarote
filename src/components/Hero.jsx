import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beach from "../assets/beach.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-screen object-cover"
        src={beach}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>
      <div className="absolute text-white top-0 flex flex-col justify-center text-center w-full h-full ">
        <h1>First Class VACATIONS at...</h1>
        <h2 className="p-3">Top Locations in Lanzarote</h2>
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full p-1 border rounded-lg text-black bg-gray-100/90">
          <div>
            <input
              type="text"
              placeholder="Search for Hotels"
              className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none"
            ></input>
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
