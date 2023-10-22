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
    <div className="max-w-[300] group">
      <Toaster />
      <Link to={`/course/${course?._id}`} className="relative">
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
      {/* <div className="absolute hidden group-hover:block -top-5">
        <h4>{course?._id}</h4>
      </div> */}
    </div>
  );
};

export default SingleTab;
