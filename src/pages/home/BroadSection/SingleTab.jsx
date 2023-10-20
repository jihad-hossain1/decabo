import React, { useContext } from "react";
import { TbEye } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Rating } from '@material-tailwind/react';
import { Rate } from "antd";
import toast, { Toaster } from "react-hot-toast";
// import { AuthContext } from "../../../authentication/AuthProvider";
// import useUserCart from "../../../hooks/useUserCart";
// import WhitelistButton from "../../allToy/singleCard/WhitelistButton";

const SingleTab = ({ ite: course }) => {
  const handleEnrollCart = async (toyObj) => {
    if (!user) {
      return toast.error("login first");
    } else {
      const cartVerify = carts?.find((item) => item?.itemId == toyObj?._id);
      if (cartVerify) {
        return toast.error("already added this toy");
      } else {
        const info = {
          itemId: toyObj?._id,
          email: user?.email,
          item: toyObj,
        };
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/carts`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        });
        const data = await res.json();
        if (data) {
          refetch();
          toast.success("check your cart");
          //   isEnrollRefetch()
        }
        console.log(data);
      }
    }
  };
  return (
    <div className="max-w-[300]">
      <Toaster />
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
    </div>
  );
};

export default SingleTab;
