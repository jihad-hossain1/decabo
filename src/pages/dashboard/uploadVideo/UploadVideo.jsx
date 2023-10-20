import React from "react";
import UploadWidget from "../../../widget/UploadWidget";
import MultipleUploadForm from "../../../widget/MultipleUploadForm";
import MultipleVideoUpload from "../../../widget/MultipleVideoUpload";

const UploadVideo = () => {
  return (
    <div className="">
      <UploadWidget />
      <div className="flex space-x-6 items-center">
        <MultipleUploadForm />
        <MultipleVideoUpload />
      </div>
    </div>
  );
};

export default UploadVideo;
