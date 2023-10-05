import React from 'react';
import { useEnroll } from '../../../hooks/useEnroll';
import { Link } from 'react-router-dom';
import SingleEnroll from './SingleEnroll';
import Swal from 'sweetalert2';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Enroll = () => {
    const [enrolls,isEnrollRefetch,isEnrollLoading] = useEnroll()
    const handleDeleteEnroll = async (deleteItem) => {
        try {
         const res = await fetch(
            `${import.meta.env.VITE_BASE_URL}/enroll/${deleteItem._id}`,
            {
              method: 'DELETE'
            }
          )
          const dataRes = await res.json();
          // console.log(dataRes);
          if(dataRes.deletedCount > 0){
            console.log(dataRes.deletedCount);
            toast.success('course deleted')
            isEnrollRefetch()
          }
        } catch (error) {
          console.log(error.message);
        }
      };
    return (
        <div className='md:max-w-[1280px] md:mx-auto px-2 py-6'>
          <Toaster />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {enrolls.length > 0 ? enrolls.map(item=><SingleEnroll isEnrollRefetch={isEnrollRefetch} handleDeleteEnroll={handleDeleteEnroll} item={item} key={item?._id}>
                    
                </SingleEnroll>) : <div className='flex justify-center items-center'>
                    <div className=''>
                    <h4 className='text-2xl font-bold text-blue-gray-700'>Ops no enroll course here...</h4>
                    <Link to={`/courses`} className='text-light-blue-700 hover:text-blue-gray-800'>Enroll here</Link>
                    </div>

                    </div>}
            </div>
        </div>
    );
};

export default Enroll;