// import { Button } from 'antd';
import { Button, Input, Textarea } from '@material-tailwind/react';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useSearchParams } from 'react-router-dom';

const UpdateCourse = () => {
    const course = useLoaderData();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const details = form.details.value;
        const sylebus = form.sylebus.value;
        const instructorName = form.instructorName.value;
        const instructorInformation = form.instructorInformation.value;
        const instructorTitle = form.instructorTitle.value;
        const instructorRating = form.instructorRating.value;
        const coursePrice = form.coursePrice.value;
        const courseRequirement = form.courseRequirement.value;
        // console.log(updateinfo)
        const info = {
            instructorRating: parseFloat(instructorRating),
            coursePrice: parseFloat(coursePrice),
            title,
            details,
            instructorName,
            sylebus,
            instructorInformation,
            instructorTitle,
            courseRequirement,
          };
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/course/${course?._id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
          }
        );
        const data = await res.json();
    
        if (data.modifiedCount == 1) {
          toast.success(`${title} course updated`);
          console.log(data.modifiedCount);
        //   closeModal();
        //   refetch();
        
        } else console.log(res);
      };
    console.log(course)
    return (
        <div className='md:w-[1280px] mx-auto  my-10 px-2 pb-6'>
            <div className='md:max-w-[600px] mx-auto px-2'>
            <form action=''  onSubmit={handleUpdate} className='px-4'>
          <div className=''>
            <h4 className='text-2xl font-semibold text-center text-blue-gray-700 mb-5'>
              Update Your Course
            </h4>
              <div className='mb-4'>
                <Input
                  required
                  type='text'
                  className='w-full'
                  color='teal'
                  name='title'
                  label='Your Course Title'
                  defaultValue={course?.title}
                />
              </div>
              <div className='grid md:grid-cols-2 gap-1'>
                <div className='mb-4'>
                  <Input
                    required
                    type='text'
                    className='w-full'
                    color='teal'
                    name='instructorName'
                    label='Instructor Name'
                    defaultValue={course?.instructorName}
                  />
                </div>
                <div className='mb-4'>
                  <Input
                    required
                    type='text'
                    className='w-full'
                    color='teal'
                    name='coursePrice'
                    label='course Price'
                    defaultValue={course?.coursePrice}
                  />
                </div>
                <div className='mb-4'>
                  <Input
                    required
                    type='text'
                    className='w-full'
                    color='teal'
                    name='instructorRating'
                    label='Instructor Rating'
                    defaultValue={course?.instructorRating}
                  />
                </div>
                <div className='mb-4'>
                  <Input
                    required
                    type='text'
                    className='w-full'
                    color='teal'
                    name='instructorTitle'
                    label='Instructor Lead Title'
                    defaultValue={course?.instructorTitle}
                  />
                </div>
              </div>
              <div className='mb-4'>
                <Input
                  required
                  type='text'
                  defaultValue={course?.instructorEmail}
                  className='w-full'
                  color='teal'
                  name='instructorEmail'
                  label='Instructor Email'
                />
              </div>
              <div className='mb-4'>
                <Textarea
                  color='teal'
                  className='w-full'
                  itemType='text'
                  required
                  name='sylebus'
                  type='text'
                  label='Sylebus Information'
                  defaultValue={course?.sylebus}
                />
              </div>
              <div className='mb-4'>
                <Textarea
                  color='teal'
                  className='w-full'
                  itemType='text'
                  required
                  name='courseRequirement'
                  type='text'
                  label='Course Requirement'
                  defaultValue={course?.courseRequirement}
                />
              </div>
              <div className='mb-4'>
                <Textarea
                  color='teal'
                  className='w-full'
                  itemType='text'
                  required
                  name='details'
                  type='text'
                  label='Course Details information'
                  defaultValue={course?.details}
                />
              </div>
              <div className='mb-4'>
                <Textarea
                  color='teal'
                  className='w-full'
                  itemType='text'
                  required
                  name='instructorInformation'
                  type='text'
                  label='Instructor Information'
                  defaultValue={course?.instructorInformation}
                />
              </div>
              <div>
                <Button
                  className='w-full'
                  value={`Add Course`}
                  label='Add Course'
                  type='submit'
                  color='teal'
                  variant='outlined'
                >
                  {" "}
                  Update Course{" "}
                </Button>
              </div>
            
          </div>
        </form>
        </div>
        </div>
    );
};

export default UpdateCourse;