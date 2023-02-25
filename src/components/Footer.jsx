import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 pt-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center  text-gray-600">
          <h1>LANZAROTE.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Partnership</li>
            <li>Carrers</li>
          </ul>
          <ul className="text-right lg:flex">
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
        </div>
        <p className="mx-auto pt-8 mb-2">
          2023. Visit Lanzarote today! We are waiting for YOU!
        </p>
      </div>
    </div>
  );
};

export default Footer;
