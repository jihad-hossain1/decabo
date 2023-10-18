import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ProfileMenu } from "../../../components/profileMenu/Profilemenu";

const EnrolledMainDashboard = () => {
  return (
    <div className="bg-teal-50 min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <Navbar className="sticky top-0 z-10 bg-teal-200 border-none rounded-b rounded-t-none">
          <div className="flex  items-center">
            <Link to={"/"} className="mr-10">
              <button className="hover:text-teal-700 font-semibold text-sm flex items-center space-x-2">
                <IoIosArrowRoundBack className="text-teal-600 text-xl" />
                <span className="text-teal-600"> Home</span>
              </button>
            </Link>
            <div className="">
              <ul className="flex space-x-7 items-center">
                <NavLink
                  to={""}
                  className={({ isActive }) =>
                    isActive
                      ? "text-teal-900 font-semibold text-sm"
                      : "text-blue-gray-600 font-semibold text-sm"
                  }
                >
                  <li>Enroll-Dash</li>
                </NavLink>
                <NavLink
                  to={"/my_enrolled_course/favorites"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-teal-900 font-semibold text-sm"
                      : "text-blue-gray-600 font-semibold text-sm"
                  }
                >
                  <li>Favorite</li>
                </NavLink>

                <NavLink
                  to={"/my_enrolled_course/enroll_course"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-teal-900 font-semibold text-sm"
                      : "text-blue-gray-600 font-semibold text-sm"
                  }
                >
                  <li>Enrolled</li>
                </NavLink>
              </ul>
            </div>
            <ProfileMenu />
          </div>
        </Navbar>
        <div className="p-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default EnrolledMainDashboard;
