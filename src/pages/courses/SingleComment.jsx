import { Button, Dialog, IconButton, Input, Textarea, Tooltip } from "@material-tailwind/react";
import React, { useContext, useRef, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";


const SingleComment = ({ item, refetch }) => {
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);
  const { user } = useContext(AuthContext);
  const {
    comment,
    commentCount,
    commentUser,
    userEmail,
    userNaem,
    userPhoto,
    _id,
    timeDate,
  } = item;

  const handleDeleteComment = (commentItem) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${import.meta.env.VITE_BASE_URL}/comments/${commentItem?._id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              // Swal.fire("Deleted!", "Your file has been deleted.", "success");
              toast.success("your comment delete successfull");
            }
          });
      }
    });
  };

  const openModal=(modalComp)=>{
    // console.log(modalComp);
    setUpdateData(modalComp);
    modalRef.current.showModal();
  }
  const closeModal = () => {
    // setUpdateData(null);
    modalRef.current.close();
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const commentUserComment = form.commentUserComment.value
    const updateinfo = {
      comment: commentUserComment
    };
    // console.log(updateinfo)
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/comments/${updateData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateinfo),
      }
    );
    const data = await res.json();

    if (data.modifiedCount == 1) {
      toast.success(` comments updated succesfull`);
      // console.log(data.modifiedCount);
      closeModal();
      refetch();
      form.reset()
    } else console.log(res);
  };

  return (
    <>
      <Toaster />
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-blue-gray-600 dark:text-gray-400 ">
            {timeDate?.commentDate || (
              <span className="text-xs text-blue-gray-500">!ops error</span>
            )}
          </span>
          <span className="text-sm font-light text-blue-gray-600 dark:text-gray-400 ">
            {timeDate?.commentTime || (
              <span className="text-xs text-blue-gray-500">!ops error</span>
            )}
          </span>
        </div>

        <div className="mt-2">
          <p className="mt-2 text-gray-600 dark:text-gray-300">{comment}</p>
        </div>

        <div
          className={`${
            user?.email == item.userEmail
              ? "flex items-center justify-between mt-4"
              : "flex items-center justify-end mt-4"
          }`}
        >
          <div
            className={`${user?.email == item.userEmail ? "block" : "hidden"}`}
          >
            {/* TODO --> comment Update & delete  */}
            <Tooltip content="Edit Comment">
              <IconButton onClick={()=>openModal(item)} variant="text">
                <PencilIcon className="h-4 w-4" />
              </IconButton>
            </Tooltip>

           <Tooltip content="dlete Comment">
           <IconButton
                onClick={() => handleDeleteComment(item)}
                variant="text"
              >
                <TrashIcon className="h-4 w-4 text-pink-800" />
              </IconButton>

           </Tooltip>
              
            
            {/* TODO --> comment Update & delete  */}
          </div>

          <div className="flex items-center">
            <img
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src={userPhoto}
              alt="avatar"
            />
            <p className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
              {userNaem}
            </p>
          </div>
         
        </div>
      </div>
          {/* modal components  */}
      <dialog ref={modalRef} className='w-[90%] max-w-[500px] rounded-md px-3 pt-2 pb-5'>
        <div>
        <div className='text-right mb-2'>
          <button
            onClick={() => {
              closeModal();
              
            }}
            className='hover:text-pink-600 p-2'
          >
            Close
          </button>
        </div>
          <form ref={formRef} action="" onSubmit={handleUpdate}>
          <h4 className='text-2xl font-semibold text-center text-blue-gray-700 mb-5'>
              Update Your Comment
            </h4>
              <div className='mb-4'>
                <Input
                readOnly
                  
                  type='text'
                  className='w-full'
                  color='teal'
                  name='commentUserName'
                  label='Your Name'
                  defaultValue={updateData?.commentUser}
                />
              </div>
              <div className='mb-4'>
                <Textarea
                  required
                  type='text'
                  className='w-full'
                  color='teal'
                  name='commentUserComment'
                  label='Your Comment '
                  defaultValue={updateData?.comment}
                />
              </div>
              <div>
                <Button
                  className='w-full'
                 
                  type='submit'
                  color='teal'
                  variant='outlined'
                >
                  {" "}
                  Update Comment{" "}
                </Button>
              </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default SingleComment;
