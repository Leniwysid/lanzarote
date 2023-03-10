import React from "react";

const CitiesCard = (props) => {
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={props.bg} alt="/" />
      <div className="bg-gray-900/10 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-1 text-2xl font-bold text-white absolute">
          {props.text}
        </p>
      </div>
    </div>
  );
};
export default CitiesCard;
