import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div className='max-w-[1280px] mx-auto py-6 px-2'>
            <img src={course?.img} className='rounded ' alt="" />
        </div>
    );
};

export default CourseDetails;