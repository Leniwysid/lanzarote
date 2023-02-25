import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-gray-600">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          LANZAROTE.
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <a href="#destinations">Destinations</a>
        </li>
        <li>
          <a href="#travel">Travel</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#book">Book</a>
        </li>
      </ul>
      <div className="hidden md:flex">
        <BsPerson size={20} />
        <BiSearch size={20} />
      </div>
      <div onClick={handleNav} className="md:hidden z-10 cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <HiMenu size={20} />}
      </div>
      <div
        onChange={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>LANZAROTE.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-4">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-8">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
