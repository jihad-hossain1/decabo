import { Avatar, Input } from "@material-tailwind/react";
import React, {  useState } from "react";
import { Link } from "react-router-dom";

const Search = ({
  setSearchText,
  coursesSearch,
  handleSearch,
}) => {
    // const wrapperRef = useRef(null);
  const [searchBarOpen, setsearchBarOpen] = useState(false);


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
        />
      </div>
      {searchBarOpen && (
        <div  className=" relative flex justify-center">
          <div  className="fixed bg-blue-gray-50 border-b border-l border-r border-blue-gray-100/80 grid grid-cols-1 shadow drop-shadow-2xl shadow-teal-200/50 gap-3 text-center rounded-md px-6 py-2 min-h-[100px] min-w-[400px]">
            {coursesSearch?.map((item) => (
              <Link
                to={`/course/${item?._id}`}
                key={item._id}
                className="flex space-x-3 items-center hover:text-blue-700 text-gray-900 "
              >
                <div>
                  <Avatar src={item?.img} alt="avatar" variant="rounded" />
                </div>
                <button onClick={() => setsearchBarOpen(false)} className="flex flex-col">
                  <span>{item?.title}</span>
                  <span className="text-xs text-gray-700"><span className="font-semibold text-gray-800">Instructor:</span> {item?.instructorName}</span>
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
