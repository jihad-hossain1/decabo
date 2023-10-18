import React from 'react';
import useEnrolled from '../../hooks/useEnrolled';
import Skeleton from 'react-loading-skeleton';

const EnrolledCourse = () => {
    const [enrolled, isEnrollRefetch, isError, isLoading, error] = useEnrolled();
    if(isLoading){
        return(
            <div className="max-w-[1100px] mx-auto px-2 md:px-10 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((item,index)=><div key={index}>
          <Skeleton className="h-24" />
          <Skeleton   count={1} />
          <Skeleton   count={1} />
          <Skeleton className="w-10"  count={1} />
          </div>)}
      </div>
     </div>
        )
    }
    return (
        <div className='bg-teal-900'>
           <div className='max'>

           </div>
        </div>
    );
};

export default EnrolledCourse;