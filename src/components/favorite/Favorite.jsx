import React, { useContext, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  Avatar,
  Button,
  Badge,
} from "@material-tailwind/react";
import { AuthContext } from "../../provider/AuthProvider";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import useFavorite from "../../hooks/useFavorite";
import useCarts from "../../hooks/useCarts";
import toast, { Toaster } from "react-hot-toast";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [cart, isRefetch] = useCarts();
  const [favorite] = useFavorite();
  const [openMenu, setOpenMenu] = useState(false);

  const handleEnrollCart = async (ci) => {
    if (!user) {
      return toast.error("login first");
    } else {
      const enrollVerify = cart?.find(({ courseId }) => courseId == ci._id);
      if (enrollVerify) {
        return toast.error("already added in Cart ");
      } else {
        const info = {
          course: ci,
          email: user?.email,
          userName: user?.displayName,
          photo: user?.photoURL,
          courseId: ci?._id,
        };
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/enroll`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        });
        const data = await res.json();
        if (data) {
          isRefetch();
          toast.success("check your enroll course option");
        }
        console.log(data);
      }
    }
  };
  return (
    <div>
      <Toaster />
      <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
          <button>
            {favorite?.length > 0 ? (
              <Badge color="teal">
                <MdFavoriteBorder className="text-2xl hover:text-teal-600 " />
              </Badge>
            ) : (
              <MdFavoriteBorder className="text-2xl hover:text-teal-600 " />
            )}
          </button>
        </MenuHandler>
        <MenuList className="mt-7 max-w-[300px] p-4 min-w-[100px]  overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1">
            {favorite?.length > 0 ? (
              favorite?.map(({ course, _id }) => (
                <div key={_id}>
                  <MenuItem className="flex space-x-1">
                    <Avatar src={course?.img} variant="rounded" />
                    <div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-1 text-xs"
                      >
                        {course?.title}
                      </Typography>
                      <div className="flex space-x-6 items-center">
                        <h4 className="font-bold tex-sm">
                          ${course?.coursePrice}
                        </h4>
                        <Button
                          onClick={() => handleEnrollCart(course)}
                          color="teal"
                          variant="gradient"
                          size="sm"
                          className="max-w-[100px] py-1 px-[5px] text-[10px] rounded"
                        >
                          Enroll
                        </Button>
                      </div>
                    </div>
                  </MenuItem>
                </div>
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
          <Link
            to={"/my_enrolled_course/favorites"}
            className={
              favorite?.length > 0
                ? "text-center py-3 px-4 w-ful bg-gray-800 hover:bg-gray-900 text-white font-semibold"
                : "hidden"
            }
          >
            Go To Whitelist
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Favorites;
