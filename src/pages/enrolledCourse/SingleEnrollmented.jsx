import React from "react";

const SingleEnrollmented = ({ enroll, courses }) => {
  const { _id } = enroll;

  return (
    <div>
      <div>
        {courses?.map((item) => {
          <div>
            <h4>{item?.course?.title}</h4>
          </div>;
        })}
      </div>
    </div>
  );
};

export default SingleEnrollmented;
