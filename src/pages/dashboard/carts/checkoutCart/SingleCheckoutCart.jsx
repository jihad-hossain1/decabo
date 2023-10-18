import { Avatar } from "@material-tailwind/react";
import React from "react";
import { Rate } from "antd";
// import RemoveFromCart from "../removeFromCart/RemoveFromCart";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const SingleCheckoutCart = ({ cartItem ,isRefetch}) => {
  const { _id, course } = cartItem;

  const handleRemoveCart =(ci)=>{
    try {
        axios.delete(`${import.meta.env.VITE_BASE_URL}/carts_remove/${ci?._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
                isRefetch();
              // Swal.fire("Deleted!", "Your file has been deleted.", "success");
              toast.success("your comment delete successfull");
            }
          });

    } catch (error) {
        console.log(error.message);
        
    }
  }
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
        <button onClick={()=>handleRemoveCart(cartItem)} className="text-teal-600 hover:text-teal-500">Remove</button>
          <button className="text-teal-600 hover:text-teal-500">
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
