import { Rate } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({course}) => {

    return (
      <Link to={`/course/${course?._id}`}>
        <div className="md:overflow-hidden md:h-[310px] px-4 py-2  bg-cyan-50 bg-opacity-20 rounded-lg border border-cyan-50 hover:border-cyan-100 shadow-sm drop-shadow-sm hover:drop-shadow">
          <div className="flex justify-center">
            <div className="max-w-[300px] ">
              <img
                src={course?.img}
                className="rounded object-cover"
                alt="course photo"
              />
            </div>
          </div>
          <h4 className="text-xl font-bold mb-2 break-all">
            {course?.title ? course?.title : "Ops.. fetch eRRoR"}
          </h4>
          <p className=" text-xs text-blue-gray-800 ">
            {course?.instructorName
              ? course?.instructorName
              : "Ops.. fetch eRRoR"}
          </p>
          <div className="flex space-x-2 items-center">
            <p className="text-sm text-blue-gray-600 break-all">
              {course?.instructorRating
                ? course?.instructorRating
                : "Ops.. fetch eRRoR"}
            </p>
            <Rate disabled defaultValue={course?.instructorRating} />
            <p className="text-sm text-blue-gray-900">{`(${
              course?.ratingCount || 0
            })`}</p>
          </div>
          <h4 className=" text-blue-gray-800 font-bold break-all">
            {course?.coursePrice ? (
              <span>{course?.coursePrice}$</span>
            ) : (
              "Ops.. fetch eRRoR"
            )}
          </h4>
        </div>
      </Link>
    );
};

export default SingleCourse;