import React, { useContext, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  Avatar,
  Badge,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useCarts from "../../../../hooks/useCarts";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AuthContext } from "../../../../provider/AuthProvider";
// import { Avatar } from "antd";

const HeaderCarts = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCarts();

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <button>
            <Badge color="teal" content={cart?.length || 0} withBorder>
              <HiOutlineShoppingCart className="text-2xl hover:text-teal-600" />
            </Badge>
          </button>
        </MenuHandler>
        <MenuList className="mt-7 max-w-[350px] p-4 min-w-[100px]  overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1">
            {cart?.length > 0 ? (
              cart?.map(({ _id, course }) => (
                <div key={_id} className="">
                  <MenuItem className="flex  space-x-2 border-b border-blue-gray-100">
                    <Avatar src={course?.img} alt="avatar" variant="square" />
                    <div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-1 text-sm font-semibold text-blue-gray-900"
                      >
                        {course?.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-1 text-xs font-light"
                      >
                        {course?.instructorName}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-1 text-sm font-semibold text-blue-gray-900"
                      >
                        ${course?.coursePrice}
                      </Typography>
                    </div>
                  </MenuItem>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-between min-h-[100px] min-w-[300px]">
                <h4 className="text-blu-gray-700 font-semibold text-center">
                  Your Carts is Empty
                </h4>

                <Link
                  to={"/courses"}
                  className="text-center text-teal-600 font-semibold"
                >
                  Explore Course
                </Link>
              </div>
            )}
            {cart?.length > 0 && (
              <Link
                to={"/checkout"}
                className="w-full py-4 px-2 text-blue-gray-50 bg-gray-900 rounded-sm hover:bg-blue-gray-800 text-center font-semibold"
              >
                Go To Cart
              </Link>
            )}
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
};

export default HeaderCarts;
