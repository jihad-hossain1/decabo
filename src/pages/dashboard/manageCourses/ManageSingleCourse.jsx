import { TrashIcon } from '@heroicons/react/24/outline';
import { PencilIcon } from '@heroicons/react/24/solid';
import { Avatar, Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import ModalCourse from './ModalCourse';
import { Link } from 'react-router-dom';


const ManageSingleCourse = ({course,classes,refetch,handleDelete}) => {
    const modalRef = useRef(null);
    const [updateData, setUpdateData] = useState(null);
    const openModal = (cours) => {
    setUpdateData(cours);
    modalRef.current.showModal();
  };
  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };
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
      `${import.meta.env.VITE_BASE_URL}/course/${updateData._id}`,
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
      closeModal();
    //   refetch();
    } else console.log(res);
  };
    return (
        <>
            <tr>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={course?.img} alt={course?.title} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {course?.title}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {course?.instructorEmail}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {course?.instructorName}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {course?.instructorTitle}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={course?.status ? "accept" : "pending" }
                          color={course?.status ? "green" : "blue-gray" }
                        />
                      </div>
                    </td>
                    
                    <td className={`${classes} flex space-x-2`}>
                      <Link to={`/dashboard/updateCourse/${course?._id}`}>
                      <Tooltip  content="Edit Course">
                        <IconButton  variant="text">
                          <PencilIcon  className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      </Link>
                      <Tooltip content="Delete Course">
                        <IconButton onClick={()=>handleDelete(course)} variant="text">
                          <TrashIcon className="h-4 w-4 text-pink-800" />
                        </IconButton>
                      </Tooltip>
                    </td>
                    {/* <ModalCourse
        ref={modalRef}
        closeModal={closeModal}
        updateData={updateData}
        handleUpdate={handleUpdate}
      ></ModalCourse> */}
                  </tr>
       
        </>
    );
};

export default ManageSingleCourse;