import React, { useState } from "react";
import useEnrolled from "../../hooks/useEnrolled";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import Courses from "../courses/Courses";
import SingleEnrollmented from "./SingleEnrollmented";
import { Link } from "react-router-dom";

const EnrolledCourse = () => {
  const [enrolled, isEnrollRefetch, isError, isLoading, error] = useEnrolled();
  if (isLoading) {
    return (
      <div className=" px-2 md:px-10 py-4">
        <div className="grid grid-cols-2 ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <SkeletonTheme key={index}>
              <Skeleton className="h-24" />
              <Skeleton count={5} className="" />
              <Skeleton count={10} className="" />
              <Skeleton className="w-10" count={2} />
            </SkeletonTheme>
          ))}
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-xl mt-20 text-center font-semibold">
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <div>
        <h4 className="text-center underline mb-3">
          Your Enrollment Courses : {enrolled?.length || 0}
        </h4>
        <div>
          {enrolled?.map((enroll) => (
            <div key={enroll?._id}>
              {enroll.courses?.map((itm) => (
                <div key={itm?._id} className=" flex  space-x-2 mb-5">
                  <div>
                    <img
                      className="rounded w-96 object-cover"
                      src={itm?.img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-xl font font-semibold text-blue-gray-800">
                      {itm?.title}
                    </h4>
                    <h4>{itm?.courseDetailsHead}</h4>
                    <div className="flex flex-col justify-center items-center min-h-[180px] rounded-lg shadow shadow-teal-200 drop-shadow-2xl border border-blue-gray-100">
                      <Link
                        to={"#"}
                        className="text-teal-600 hover:text-teal-900 "
                      >
                        See video content
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourse;
