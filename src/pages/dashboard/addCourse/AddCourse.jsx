import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProvider";
const img_hosting_token = import.meta.env.VITE_IMGBB;
import Swal from 'sweetalert2'

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const [isCategory, setIsCategory] = useState("");
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const navgiation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const details = form.details.value;
    const sylebus = form.sylebus.value;
    const instructorEmail = form.instructorEmail.value;
    const instructorName = form.instructorName.value;
    const instructorInformation = form.instructorInformation.value;
    const instructorTitle = form.instructorTitle.value;
    const instructorRating = form.instructorRating.value;
    const coursePrice = form.coursePrice.value;
    const courseRequirement = form.courseRequirement.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const imageUrlFetch = await fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgUrl = imgResponse.data.display_url;
        if (imgUrl) {
          toast.success("image upload successfull");
          return imgUrl;
        }
      });

    const info = {
      instructorRating: parseFloat(instructorRating),
      coursePrice: parseFloat(coursePrice),
      title,
      details,
      instructorName,
      instructorEmail,
      categories: isCategory,
      sylebus,
      img: imageUrlFetch,
      instructorInformation,
      instructorTitle,
      courseRequirement,
    };
    console.log(info);
    try {
      const res = await fetch(`https://decabo-server.vercel.app/course`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const resData = res.json();
      console.log(resData)
      if (resData) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        // form.reset();
        // navgiation("/courses");
      } else {
        toast.error(`try again adding ${title} `);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='md:w-[1280px] mx-auto  my-10 px-2 pb-6'>
      <Toaster></Toaster>
      <div className='md:max-w-[600px] mx-auto px-2'>
        <h4 className='text-2xl font-semibold text-center text-blue-gray-700 mb-5'>
          Add Your Course
        </h4>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <Input
              required
              type='text'
              className='w-full'
              color='teal'
              name='title'
              label='Your Course Title'
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
              />
            </div>
          </div>
          <div className='mb-4'>
            <Input
              required
              type='text'
              defaultValue={user?.email}
              className='w-full'
              color='teal'
              name='instructorEmail'
              label='Instructor Email'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='select' className='text-blue-gray-500 text-sm'>
              Select category
            </label>
            <select
              required
              placeholder='select category'
              value={isCategory}
              onChange={(e) => setIsCategory(e.target.value)}
              name='select'
              className='focus:outline-none rounded-md border-blue-gray-200 w-full border p-2 outline-none'
            >
              <option
                value='react'
                className='hover:text-blue-gray-700 text-blue-gray-500 '
              >
                React
              </option>
              <option
                value='web-Developer'
                className='hover:text-blue-gray-700 text-blue-gray-500 '
              >
                web-Developer
              </option>
              <option
                value='full-stack'
                className='hover:text-blue-gray-700 text-blue-gray-500 '
              >
                full-stack
              </option>
              <option
                value='svelte'
                className='hover:text-blue-gray-700 text-blue-gray-500 '
              >
                Svelte
              </option>
              <option
                value='javascript'
                className='hover:text-blue-gray-700 text-blue-gray-500 '
              >
                JavaScript
              </option>
            </select>
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
            />
          </div>
          <div className='mb-4'>
            <Input
              required
              type='file'
              className='w-full'
              color='teal'
              name='image'
              label='Course Photo Upload Here'
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
              Add Course{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
