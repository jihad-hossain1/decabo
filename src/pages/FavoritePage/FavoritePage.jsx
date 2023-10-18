import React from "react";
import useFavorite from "../../hooks/useFavorite";
import { Rate } from "antd";

const FavoritePage = () => {
  const [favorite, isFavFetch, isFavError, isFavLoading, error] = useFavorite();
  if (isFavLoading) {
    return <div className="text-center text-xl font-bold">Loading....</div>;
  }
  if (isFavError) {
    return (
      <div className="text-2xl font-semibold text-center">{error.message}</div>
    );
  }
  console.log(favorite);
  const handleFavoriteRemove = (ri) => {};
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
        {favorite?.map(({ course, _id }) => {
          return (
            <div
              key={_id}
              className=" px-4 py-2  bg-cyan-50 bg-opacity-20 rounded-lg border border-cyan-50 hover:border-cyan-100 shadow-sm drop-shadow-sm hover:drop-shadow"
            >
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
          );
        })}
      </div>
    </div>
  );
};

export default FavoritePage;
