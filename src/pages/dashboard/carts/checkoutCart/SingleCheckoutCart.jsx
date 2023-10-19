import { Avatar } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Rate } from "antd";
// import RemoveFromCart from "../removeFromCart/RemoveFromCart";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import useFavorite from "../../../../hooks/useFavorite";
import { AuthContext } from "../../../../provider/AuthProvider";

const SingleCheckoutCart = ({ cartItem, isRefetch }) => {
  const { user } = useContext(AuthContext);
  const [favorite, isFavFetch] = useFavorite();
  const { _id, course } = cartItem;
  // handle for remove from cart
  const handleRemoveCart = (ci) => {
    try {
      axios
        .delete(`${import.meta.env.VITE_BASE_URL}/carts_remove/${ci?._id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            isRefetch();
            // Swal.fire("Deleted!", "Your file has been deleted.", "success");
            toast.success("iTem delete successfull");
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  // handle add to favorite cart
  const handleFavCart = async (favCourse) => {
    if (!user) {
      return toast.error("login first");
    } else {
      const favVerify = favorite?.find(
        ({ courseId }) => courseId == favCourse._id
      );
      if (favVerify) {
        return toast.error("already added in whitelist ");
      } else {
        const info = {
          course: favCourse,
          email: user?.email,
          userName: user?.displayName,
          photo: user?.photoURL,
          courseId: favCourse?._id,
        };
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/favorite`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        });
        const data = await res.json();
        if (data) {
          isFavFetch();
          toast.success("check your whitelist");
        }
        console.log(data);
      }
    }
  };
  // when a course available in favorite option then remove this button from ui
  const removeFavButton = favorite?.find(
    ({ courseId }) => courseId == course?._id
  );
  return (
    <div className="flex justify-between space-x-3">
      <Toaster />
      <div className="flex space-x-4">
        <div>
          <Avatar
            className="md:h-2w-24 md:w-24"
            src={course?.img}
            alt="avatar"
            variant="square"
          />
        </div>
        <div>
          <h4 className="font-semibold">{course?.title}</h4>
          <p className="text-xs text-blue-gray-500">{course?.instructorName}</p>
          <div className="flex space-x-2 text-xs">
            <p>{course?.instructorRating}</p>
            <Rate
              className="text-xs "
              disabled
              value={course?.instructorRating}
            />
            {`(${10023} ratings)`}
          </div>
          <div className="flex space-x-2 items-center text-xs mt-1">
            <p>{`${12.5} total hours`}</p>
            <div className="h-1 w-1 rounded-full bg-blue-gray-600"></div>
            <p>{`${45} lactures`}</p>
            <div className=" mr-2 h-1 w-1 rounded-full bg-blue-gray-600"></div>
            <p>{` All Levels`}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end text-xs space-y-1">
        <h4 className="text-xl font-bold">${course?.coursePrice}</h4>
        <button
          onClick={() => handleRemoveCart(cartItem)}
          className="text-teal-600 hover:text-teal-500"
        >
          Remove
        </button>
        <button
          onClick={() => handleFavCart(cartItem?.course)}
          className={
            removeFavButton ? "hidden" : "text-teal-600 hover:text-teal-500"
          }
        >
          Move to Whitelist
        </button>
        <button className="text-teal-600 hover:text-teal-500">
          Save for Later
        </button>
      </div>
    </div>
  );
};

export default SingleCheckoutCart;
