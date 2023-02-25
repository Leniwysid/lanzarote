import React from "react";
import foto1 from "../assets/lan1.jpg";
import foto2 from "../assets/lan9.JPEG";
import foto3 from "../assets/lan6.JPEG";
import foto5 from "../assets/lan3.jpg";
import foto4 from "../assets/lan5.JPEG";

const Travel = () => {
  return (
    <div id="travel" className="max-w-[1440px] mx-auto py-16 px-4 text-center">
      <h1>Visit us today!</h1>
      <p className="py-2">There are plenty of beautiful places...</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="foto col-span-2 md:col-span-3 row-span-2"
          src={foto5}
          alt="/"
        />
        <img
          className="foto sm:hover:scale-110 ease-in-out duration-500"
          src={foto1}
          alt="/"
        />
        <img
          className="foto sm:hover:scale-110 ease-in-out duration-500"
          src={foto2}
          alt="/"
        />
        <img
          className="foto sm:hover:scale-110 ease-in-out duration-500"
          src={foto3}
          alt="/"
        />
        <img
          className="foto sm:hover:scale-110 ease-in-out duration-500"
          src={foto4}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Travel;
