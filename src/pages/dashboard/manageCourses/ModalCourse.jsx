import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useRef } from "react";

const ModalCourse = ({ closeModal, updateData, handleUpdate }, ref) => {
  const formRef = useRef(null);
  return (
    
      <dialog ref={ref} className='w-[90%] max-w-[500px] rounded-md p-2'>
        <div className='text-right mb-2'>
          <button
            onClick={() => {
              closeModal();
              formRef.current.reset();
            }}
            className='hover:text-pink-600 p-2'
          >
            Close
          </button>
        </div>
        <form action='' ref={formRef} onSubmit={handleUpdate} className='px-4'>
          <div className='md:max-w-[600px] mx-auto px-2'>
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
                  defaultValue={updateData?.title}
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
                    defaultValue={updateData?.instructorName}
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
                    defaultValue={updateData?.coursePrice}
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
                    defaultValue={updateData?.instructorRating}
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
                    defaultValue={updateData?.instructorTitle}
                  />
                </div>
              </div>
              <div className='mb-4'>
                <Input
                  required
                  type='text'
                  defaultValue={updateData?.instructorEmail}
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
                  defaultValue={updateData?.sylebus}
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
                  defaultValue={updateData?.courseRequirement}
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
                  defaultValue={updateData?.details}
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
                  defaultValue={updateData?.instructorInformation}
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
      </dialog>
    
  );
};

export default ModalCourse;
