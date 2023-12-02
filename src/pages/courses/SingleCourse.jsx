import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  return (
    <div className="group">
      <div className="">
        <Link to={`/course/${course?._id}`}>
          <div className="md:overflow-hidden md:h-[350px] px-2 py-2 ">
            <div className="flex justify-center">
              <div className="max-w-[300px]">
                <img
                  src={course?.img}
                  className="rounded-sm object-cover md:h-[180px] border border-gray-500"
                  alt="course photo"
                />
              </div>
            </div>
            <h4 className="text-[15px] font-bold mb-2 break-all mt-2">
              {/* {`${course?.title.slice(0, 40)}...`} */}
              {course?.title?.split(" ").length > 43
                ? `${course?.title.slice(0, 43)}...`
                : `${course?.title}`}
            </h4>
            <p className=" text-xs text-blue-gray-800 ">
              {course?.instructorName}
            </p>
            <div className="flex space-x-2 items-center">
              <p className="text-sm text-blue-gray-600 break-all">
                {course?.instructorRating}
              </p>
              <Rate disabled defaultValue={course?.instructorRating} />
              <p className="text-sm text-blue-gray-900">{`(${
                course?.ratingCount || 0
              })`}</p>
            </div>
            <h4 className=" text-blue-gray-800 font-bold break-all">
              {course?.coursePrice}
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleCourse;
