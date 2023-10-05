import { EyeIcon } from "@heroicons/react/24/solid";
import { IconButton, Tooltip } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaAmazonPay, FaTrashAlt } from "react-icons/fa";


const SingleEnroll = ({ item, isEnrollRefetch ,handleDeleteEnroll }) => {
 
  return (
    <div>
      <div className="p-[2px] border border-cyan-200 drop-shadow-sm shadow">
        <img src={item?.img} className="w-[400px] object-cover" alt="" />
      </div>
      <h4 className="font-semibold text-xs md:text-sm">{item?.title}</h4>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-xs md:text-sm mt-2">
            {item?.coursePrice}$
          </h4>
        </div>
        <div className="flex items-center space-x-2">
          <Link to={`/course/${item?._id}`}>
            <Tooltip content="Details Course">
              <IconButton variant="text">
                <EyeIcon className="h-6 w-6" />
              </IconButton>
            </Tooltip>
          </Link>
          <Tooltip content="Checkout Course">
            <IconButton variant="text">
              <FaAmazonPay className="h-6 w-6" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Delete Course">
            <button onClick={()=>handleDeleteEnroll(item)} variant="text">
              <FaTrashAlt className="h-6 w-6" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default SingleEnroll;
