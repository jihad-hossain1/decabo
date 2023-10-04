import React, { useEffect, useState } from "react";
import SingleCourse from "./SingleCourse";
// import Container from "../../components/container/Container";
import { Input } from "@material-tailwind/react";
import { BreadCumb } from "../../components/breadcrumbs/BreadCumb";
import { useCourse } from "../../hooks/useCourse";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses,refetch,loading] = useCourse()
  const [coursesSearch, setCoursesSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    await fetch(`${import.meta.env.VITE_BASE_URL}/getcourseText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setCoursesSearch(data);
      });
  };
  // console.log(courses)
  return (
    <div className='bg-blue-gray-100 bg-opacity-20 min-h-screen'>
      <div className='max-w-[1100px] mx-auto px-2 md:px-10 py-4 '>
       
        {/* search section  */}
        <div className=' p-2 text-center max-w-[450px] mx-auto flex'>
          <Input
            onChange={(e) => setSearchText(e.target.value)}
            color='teal'
            label='Search Your Queary'
            type='text'
            className='w-full'
          />{" "}
          <button
            className='border border-primary shadow rounded px-3'
            onClick={handleSearch}
          >
            Search
          </button>
          
        </div>
        <div className="grid grid-cols-1 text-center relative">
        {coursesSearch.map(item=><Link to={`/course/${item?._id}`} key={item._id} className="text-light-blue-700 hover:text-blue-gray-500 inline-block">
        {item?.title}
        </Link>)}
        </div>
        {/* courses section  */}
        <div className='mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-6'>
          {courses ? (
            courses.map((course) => (
              <SingleCourse key={course._id} course={course}></SingleCourse>
            ))
          ) : (
            <h4 className='text-blue-gray-600'>
             please wait data is loading ...
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
