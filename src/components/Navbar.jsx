import React, { useState } from "react";
import { Link } from "react-scroll";
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
    <div
      id="nav"
      className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-gray-600"
    >
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          LANZAROTE.
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link
            to="destinations"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Destination
          </Link>
        </li>
        <li>
          <Link
            to="travel"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Travel
          </Link>
        </li>
        <li>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="book"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Book
          </Link>
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
          <li className="border-b">
            <Link
              to="destinations"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Destination
            </Link>
          </li>
          <li className="border-b">
            <Link
              to="travel"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Travel
            </Link>
          </li>
          <li className="border-b">
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Gallery
            </Link>
          </li>
          <li className="border-b">
            <Link
              to="book"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Book
            </Link>
          </li>
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
