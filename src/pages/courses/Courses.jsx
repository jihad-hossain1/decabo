import SingleCourse from "./SingleCourse";
import { useCourse } from "../../hooks/useCourse";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const skele =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


const Courses = () => {
  const [courses,refetch,loading,isError,
    error] = useCourse()
    if(loading){
     return <div className="max-w-[1100px] mx-auto px-2 md:px-10 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skele.map((item,index)=><div key={index}>
          <Skeleton className="h-24" />
          <Skeleton   count={1} />
          <Skeleton   count={1} />
          <Skeleton className="w-10"  count={1} />
          </div>)}
      </div>
     </div>
    }
    if(isError){
      return (
        <div>
          {error.message}
        </div>
      )
    }
  return (
    <div className=" min-h-screen">
      <div className="max-w-7xl mx-auto px-2 md:px-0 py-4 ">
        {/* javascript courses section  */}
        <div>
          <h4 className="text-4xl font-bold text-gray-900 mb-4">
            What to learn next
          </h4>
          <h4 className="text-xl font-bold text-gray-900 mb-3">
            Because you viewed “
            <span className="text-teal-700">Javascript for Beginners</span>”
          </h4>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pb-6">
          {courses
            ?.filter((item) => item?.categories === "web-Developer")
            .map((course) => (
              <SingleCourse key={course._id} course={course}></SingleCourse>
            ))}
        </div>
        {/* javascript courses section  */}
        <div className="mt-6">
          <h4 className="text-4xl font-bold text-gray-900 mb-4">
            Popular for Web Developers{" "}
            <span className="text-teal-700 ml-3 text-xs underline cursor-pointer">
              Edit occupation
            </span>
          </h4>
          <div className="flex items-center space-x-3">
            <h4 className="bg-teal-200 px-2 py-1 text-xs font-bold text-blue-gray-900 inline-block">
              New
            </h4>
            <p className="text-gray-700 text-xs">Inspired by your selections</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pb-6">
          {courses?.map((course) => (
            <SingleCourse key={course._id} course={course}></SingleCourse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
