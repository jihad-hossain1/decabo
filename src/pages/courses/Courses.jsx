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
    <div className='bg-blue-gray-100 bg-opacity-20 min-h-screen'>
      <div className='max-w-[1100px] mx-auto px-2 md:px-10 py-4 '>
       
        {/* courses section  */}
        <div className='mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-6'>
          {courses?.map((course) => (
              <SingleCourse key={course._id} course={course}></SingleCourse>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
