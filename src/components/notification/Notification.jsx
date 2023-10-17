import React, { useContext } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineBell } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";
const menuItems = [
  {
    title: "@material-tailwind/html",
  },
];
const Notification = () => {
  const { user } = useContext(AuthContext);
  const userNotify = {
    notification: false,
  };
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div>
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <button>
            <AiOutlineBell className="text-2xl hover:text-teal-600 " />
          </button>
        </MenuHandler>
        <MenuList className="max-w-[36rem] p-4 min-w-[100px]  overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1">
            {userNotify.notification ? (
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
                <div className="flex items-center justify-between">
                  <h4 className="text-xl text-blu-gray-800 font-semibold">
                    Notification
                  </h4>
                  <button className="text-blue-gray-800 hover:text-teal-600 font-semibold">
                    Setting
                  </button>
                </div>
                <h4 className="text-center">no notification</h4>
              </div>
            )}
          </ul>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Notification;
