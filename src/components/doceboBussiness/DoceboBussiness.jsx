import React from "react";

const DoceboBussiness = () => {
  return (
    <div className="max-w-[1000px] mx-auto my-10 md:my-20 px-2 md:px-0">
      <div className="grid gap-2 md:gap-0 md:flex md:space-x-3  items-center">
        <div>
          <h4 className="text-3xl mb-3">
            <span className="font-bold mr-2 text-gray-900">Docebo</span>
            <span className="text-teal-600 font-extralight font-serif">
              business
            </span>
          </h4>
          <h4 className="text-4xl font-semibold mb-3">
            Upskill your team with Docebo Business
          </h4>
          <ul className="list-disc text-blue-gray-800 ">
            <div className="ml-7 md:text-xl space-y-3">
              <li className="ml-4">
                Unlimited access to 654+ top Docebo courses, anytime, anywhere
              </li>
              <li className="ml-4">
                International course collection in 6 languages
              </li>
              <li className="ml-4">Top certifications in tech and business</li>
            </div>
          </ul>
          <div className=" flex justify-center mt-3 space-x-2">
            <button className="text-center py-3 px-4 w-ful bg-gray-800 hover:bg-gray-900 text-white font-semibold">
              Get Docebo Business
            </button>
            <button className="py-3 px-4 bg-gray-200 hover:bg-gray-300 font-semibold border border-gray-500 ">
              Learn More
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="  object-cover"
            src="https://i.ibb.co/98Z2L8k/d12594ae00-removebg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DoceboBussiness;
