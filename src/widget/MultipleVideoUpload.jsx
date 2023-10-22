// import React from "react";
import React, { useState } from "react";
// import { uploadMultiple } from "./UploadMultiple";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { uploadMultiVideo } from "./UploadMultiple";
import VideoPlayer from "./video/VideoPlayer";
// import CloudnaryVideoPlayer from "./video/CloudnaryVideoPlayer";

const MultipleVideoUpload = () => {
  const [multiVideo, setmultiVideo] = useState([]);
  const [multiLink, setmultiLink] = useState([]);
  const [loading, setloading] = useState(false);

  const [toggleSeeGallary, settoggleSeeGallary] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(multiVideo);
    try {
      setloading(true);
      let arr = [];
      for (let i = 0; i < multiVideo.length; i++) {
        const data = await uploadMultiVideo(multiVideo[i]);
        console.log(data);
        arr.push(data);
      }
      setmultiLink(arr);
      setloading(false);
      axios.post();
      toast.success("multiple image upload successfull");
      toast.success("check show upload button click");
      console.log(multiLink);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-4">
      <Toaster />
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="video">Multiple Video Uplaod</label>
          <br />
          <input
            required
            className="border border-gray-400"
            type="file"
            name=""
            accept="video/*"
            id="video"
            multiple={true}
            onChange={(e) => setmultiVideo(e.target.files)}
          />
        </div>
        <div>
          <button
            className="border border-gray-400 px-3 py-1 rounded "
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
      {loading && <h4>uploading.....</h4>}
      <div className="mt-8 ml-10">
        <button
          onClick={() => settoggleSeeGallary(!toggleSeeGallary)}
          className="border border-blue-gray-500 px-6 py-2 rounded shadow drop-shadow-sm "
        >
          show uploaded items
        </button>
      </div>
      {toggleSeeGallary && (
        <div className="grid md:grid-cols-2 ">
          {multiLink?.map((item) => (
            <div
              key={item?.url}
              className="border rounded border-r-blue-gray-300"
            >
              {/* <VideoPlayer video={item?.url} /> */}
              {/* <CloudnaryVideoPlayer video={item?.url} /> */}
              <iframe aria-controls="" src={item?.url} frameborder="0"></iframe>
            </div>
          ))}
        </div>
      )}
      {toggleSeeGallary?.length == 0 && (
        <h4 className="text-blue-gray-900 mt-5">please upload some item</h4>
      )}
    </div>
  );
};

export default MultipleVideoUpload;
