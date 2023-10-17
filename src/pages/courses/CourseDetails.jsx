import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BreadCumb } from "../../components/breadcrumbs/BreadCumb";
import { Rate } from "antd";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useComment } from "../../hooks/useComment";
import SingleComment from "./SingleComment";
// import { useEnroll } from "../../hooks/useEnroll";
import useCarts from "../../hooks/useCarts";

const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const [cart, isRefetch, isError, isLoading, error] = useCarts();
  // const [enrolls,isEnrollRefetch,isEnrollLoading] =useEnroll()
  const course = useLoaderData();
  const [showMoreText, setShowMoreText] = useState(false);
  const [value, setValue] = useState(0);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const commentTime = new Date().toLocaleDateString();
  const commentDate = new Date().toLocaleTimeString();
  const commmentTime = {
    commentDate,
    commentTime,
  };
  const [comments, refetch, loading] = useComment();
  const handleComment = async (e) => {
    e.preventDefault();

    if (!user) {
      return toast.error("Please Login first!");
    } else {
      const form = e.target;
      const commentUserName = form.commentUserName.value;
      const commentUserComment = form.commentUserComment.value;
      //   console.log(value)
      const info = {
        comment: commentUserComment,
        commentUser: commentUserName,
        userEmail: user?.email,
        userNaem: user?.displayName,
        userPhoto: user?.photoURL,
        commentCount: parseFloat(value),
        commentID: course?._id,
        timeDate: commmentTime,
      };
      // console.log(info)
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/comments`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        });
        const data = await res.json();
        console.log(data);
        if (data) {
          toast.success(`comments successfull`);
          refetch();
          form.reset();
        }
      } catch (error) {
        console.log(error);
        toast.error(`${error}`);
      }
    }
  };

  const handleEnrollCart = async (enrollCourse) => {
    if (!user) {
      return toast.error("login first");
    } else {
      const enrollVerify = cart?.find(
        ({ courseId }) => courseId == enrollCourse._id
      );
      if (enrollVerify) {
        return toast.error("already added in Cart ");
      } else {
        const info = {
          course: enrollCourse,
          email: user?.email,
          userName: user?.displayName,
          photo: user?.photoURL,
          courseId: enrollCourse?._id,
        };
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/enroll`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        });
        const data = await res.json();
        if (data) {
          isRefetch();
          toast.success("check your enroll course option");
        }
        console.log(data);
      }
    }
  };
  const comment = comments.filter((item) => item.commentID == course?._id);
  // console.log(comment)
  return (
    <>
      <Toaster />
      <div className="w-full py-10 bg-blue-gray-900 rounded-sm shadow drop-shadow-2xl shadow-blue-gray-400">
        <div className="max-w-[1280px] mx-auto  md:px-24">
          {/* <BreadCumb></BreadCumb> */}
          <div className="  px-4 ">
            <h4 className="text-3xl font-bold text-blue-gray-50 mb-2">
              {course?.title}
            </h4>
            <h4 className="text-xl text-blue-gray-50 max-w-[500px] mb-1">
              {course?.courseDetailsHead}
            </h4>
            <div className="flex md:space-x-3  space-x-1 ">
              <div className=" px-3 py-0 rounded-sm text-gray-50 text-xs bg-yellow-800 flex items-center">
                {course?.instructorRank || <p className="text-xs">Basic</p>}
              </div>
              <h4 className="text-blue-gray-50">{course?.instructorRating}</h4>
              <Rate
                className="text-yellow-800"
                disabled
                value={course?.instructorRating}
              ></Rate>
              <p className="text-sm text-gray-50">{`(${
                course?.ratingCount || 0
              }) rating`}</p>
              <p className="text-sm text-gray-50">{`(${
                course?.purchesCount || 0
              }) students`}</p>
            </div>
            <p className="text-blue-gray-50 border-b inline-block mt-2">
              {course?.categories}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-blue-gray-50 text-xl font-bold mt-3">
                {course?.coursePrice}$
              </p>
              <div>
                <Button
                  color="teal"
                  variant="gradient"
                  onClick={() => handleEnrollCart(course)}
                  c
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto pb-2 px-2 md:px-28">
        <div className="flex flex-col-reverse md:flex-row md:space-x-2 md:justify-end mt-3 mb-3">
          <div>
            <div className="border border-cyan-100 p-3 rounded-sm shadow-sm mb-2 ">
              <h4 className="text-xl md:text-2xl font-semibold text-blue-gray-900">
                Who Take This Course
              </h4>
              <p className="text-xs md:text-sm break-all">
                {course?.courseRequirement}
              </p>
            </div>
            <div className="border border-cyan-100 p-3 rounded-sm shadow-sm mb-2 ">
              <h4 className="text-xl md:text-2xl font-semibold text-blue-gray-900">
                Course Sylebus
              </h4>
              <p className="text-xs md:text-sm break-all">{course?.sylebus}</p>
            </div>
            <div className="border border-cyan-100 p-3 rounded-sm shadow-sm mb-2 ">
              <h4 className="text-xl md:text-2xl font-semibold text-blue-gray-900">
                Course Info.
              </h4>
              <p className="text-xs md:text-sm break-all">{course?.details}</p>
            </div>
          </div>
          <div>
            <img
              src={course?.img}
              className="rounded object-cover md:max-w-[400px]"
              alt=""
            />
            <div className="p-2 mt-2 object-cover">
              <h4 className="font-semibold">Instructor Info.</h4>
              <p className="break-all text-sm">{course?.instructorName}</p>
              <p className="break-all text-sm">{course?.instructorTitle}</p>
              <p className="break-all text-sm text-gray-600">
                {course?.instructorEmail}
              </p>
              <div className="break-all text-sm">
                {showMoreText
                  ? course?.instructorInformation
                  : `${course?.instructorInformation.substring(0, 50)}`}{" "}
                <button
                  onClick={() => setShowMoreText(!showMoreText)}
                  className="text-gray-600"
                >
                  {showMoreText ? "see less" : "see more.."}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* comment or review section  */}
        <hr className="py-4" />
        <div className="">
          <h4 className="text-blue-gray-600 font-semibold px-2">
            Leave a comments..
          </h4>
          <form
            onSubmit={handleComment}
            action=""
            className="max-w-[450px] px-2 py-2"
          >
            <span>
              <Rate
                tooltips={desc}
                onChange={setValue}
                allowHalf
                className="mb-2"
                defaultValue={course?.instructorRating}
              />
              {value ? (
                <span className="ant-rate-text">{desc[value - 1]}</span>
              ) : (
                ""
              )}
            </span>
            <div className="mb-3">
              <Input
                required
                name="commentUserName"
                label="Your Name"
                color="teal"
              ></Input>
            </div>
            <Textarea
              required
              name="commentUserComment"
              label="Leave a comments"
              color="teal"
            ></Textarea>
            <Button label="" color="teal" type="submit">
              submit
            </Button>
          </form>
        </div>
        <hr className="py-4" />
        <div
          className={`${
            comment.length > 0
              ? "border border-cyan-50 p-4 rounded text-blue-gray-700 grid gap-3"
              : "text-blue-gray-600"
          }`}
        >
          {comment.length > 0
            ? comment.map((item) => (
                <SingleComment
                  item={item}
                  key={item._id}
                  refetch={refetch}
                ></SingleComment>
              ))
            : "Ops No comments here.."}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
