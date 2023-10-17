import React, { useContext, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineBell } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
const menuItems = [
  {
    title: "@material-tailwind/html",
  },
];
const Favorites = () => {
  const { user } = useContext(AuthContext);
  const favorites = {
    notification: false,
  };
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <button>
            <MdFavoriteBorder className="text-2xl hover:text-teal-600 " />
          </button>
        </MenuHandler>
        <MenuList className="max-w-[36rem] p-4 min-w-[100px]  overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1">
            {favorites.notification ? (
              menuItems.map(({ title }) => (
                <a href="#" key={title}>
                  <MenuItem>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      {title}
                    </Typography>
                  </MenuItem>
                </a>
              ))
            ) : (
              <div className="flex flex-col justify-between min-h-[100px] min-w-[300px]">
                <h4 className="text-blu-gray-700 font-semibold text-center">
                  Your Whitelist is Empty
                </h4>

                <Link
                  to={"/courses"}
                  className="text-center text-teal-600 font-semibold"
                >
                  Explore Course
                </Link>
              </div>
            )}
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Favorites;
