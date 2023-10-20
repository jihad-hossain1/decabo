import React from "react";

const BecomeInstructor = () => {
  return (
    <div className="max-w-[800px] mx-auto md:px-0 px-3">
      <div className="grid gap-5 md:flex items-center ">
        <div>
          <img
            className="object-cover"
            src="https://i.ibb.co/jvMMNZ6/instructor.png"
            alt=""
          />
        </div>
        <div>
          <h4 className="mb-3 text-3xl font-semibold text-gray-800">
            Become an instructor
          </h4>
          <h4 className="text-gray-700 mb-3">
            Instructors from around the world teach millions of learners on
            Udemy. We provide the tools and skills to teach what you love.
          </h4>
          <div>
            <button className="text-center py-3 px-4 w-ful bg-gray-800 hover:bg-gray-900 text-white font-semibold">
              Start teaching today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
