import { Avatar, Input } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Search = ({
  setSearchText,
  searchText,
  setCoursesSearch,
  coursesSearch,
  handleSearch,
}) => {
    // const wrapperRef = useRef(null);
  const [searchBarOpen, setsearchBarOpen] = useState(false);

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside, false);
//     return () => {
//       document.removeEventListener("click", handleClickOutside, false);
//     };
//   }, []);

//   const handleClickOutside = event => {
//     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setsearchBarOpen(false);
//     }
//   };
  return (
    <div className="md:w-[700px]">
      {/* search section  */}
      <div className=" p-2 text-center ">
        <Input
          onChange={(e) => setSearchText(e.target.value)}
          color="teal"
          label="Search Your Queary"
          type="search"
          autoFocus
          className="w-full"
          onKeyDown={handleSearch}
          onClick={() => setsearchBarOpen(!searchBarOpen)}
        />{" "}
        {/* <button
            className='border border-primary shadow rounded px-3'
            onClick={handleSearch}
          >
            Search
          </button> */}
      </div>
      {searchBarOpen && (
        <div  className=" relative flex justify-center">
          <div  className="fixed bg-blue-gray-50 grid grid-cols-1 gap-3 text-center rounded-md px-6 py-2 min-h-[100px] min-w-[300px]">
            {coursesSearch?.map((item) => (
              <Link
                to={`/course/${item?._id}`}
                key={item._id}
                className="flex space-x-3 items-center text-light-blue-700 hover:text-blue-gray-500 "
              >
                <div>
                  <Avatar src={item?.img} alt="avatar" variant="rounded" />
                </div>
                <button onClick={() => setsearchBarOpen(false)}>
                  <span>{item?.title}</span>
                  <span></span>
                </button>
              </Link>
            )) || <div>No item match</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
