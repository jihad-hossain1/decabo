import React from "react";
import useFavorite from "../../hooks/useFavorite";
import { Rate } from "antd";
// import { IconButton } from "@material-tailwind/react";
import {Link} from 'react-router-dom'
import { MdFavorite } from "react-icons/md";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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
  // console.log(favorite);

  const handleRemoveFav = (item) => {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/favorite_remove/${item?._id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          isFavFetch();
          // Swal.fire("Deleted!", "Your file has been deleted.", "success");
          toast.success("iTem Remove successfull");
        }
      });
    // console.log(item);
  };

  return (
    <div className="">
      <Toaster />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
        {favorite?.length > 0 ? (
          favorite?.map((itm) => {
            return (
              <div
                key={itm?._id}
                className=" px-4 py-2  bg-cyan-50 bg-opacity-20 rounded-lg border border-cyan-50 hover:border-cyan-100 shadow-sm drop-shadow-sm hover:drop-shadow"
              >
                <div className="flex justify-center">
                  <div className="max-w-[300px] group">
                    <img
                      src={itm?.course?.img}
                      className="rounded object-cover"
                      alt="course photo"
                    />
                    <MdFavorite
                      onClick={() => handleRemoveFav(itm)}
                      title="remove from fav."
                      className="rounded bg-teal-50/50 text-[#f8b45a]  absolute top-2 right-4 text-3xl cursor-pointer"
                    />
                  </div>
                </div>
                <div className="">
                  <h4 className="text-xl font-bold mb-2 break-all">
                    {itm?.course?.title}
                  </h4>
                </div>
                <p className=" text-xs text-blue-gray-800 ">
                  {itm?.course?.instructorName}
                </p>
                <div className="flex space-x-2 items-center">
                  <p className="text-sm text-blue-gray-600 break-all">
                    {itm?.course?.instructorRating}
                  </p>
                  <Rate disabled defaultValue={itm?.course?.instructorRating} />
                  <p className="text-sm text-blue-gray-900">{`(${
                    itm?.course?.ratingCount || 0
                  })`}</p>
                </div>
                <h4 className=" text-blue-gray-800 font-bold break-all">
                  {itm?.course?.coursePrice ? (
                    <span>{itm?.course?.coursePrice}$</span>
                  ) : (
                    "Ops.. fetch eRRoR"
                  )}
                </h4>
              </div>
            );
          })
        ) : (
          <div className="">
            <div className="mt-20 text-center">
              <h4 className="mb-3">No Item here...</h4>
              <Link to={"/courses"} className="text-teal-500 font-semibold ">
                Go To Course
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
