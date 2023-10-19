import React from "react";
import heroImg from "../../assets/hero/download.jpg";

const Hero2 = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div
        className="bg- w-full  bg-cover bg-inherit flex flex-col justify-start items-start min-h-[400px] shadow drop-shadow-sm"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="ml-20 mt-20 p-8 border bg-blue-gray-50/30 border-blue-gray-50/30 shadow-md rounded-sm">
          <h4 className="font-serif font-bold text-4xl text-blue-gray-900 mb-3">
            Find the right fit
          </h4>
          <p className="text-sm  text-blue-gray-700">
            The topics you want, taught by real-world experts. <br /> Log in for
            deals on courses. Sale ends tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
