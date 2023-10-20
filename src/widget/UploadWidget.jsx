import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
im;

const UploadWidget = () => {
  const [video, setVideo] = useState(null);
  const [image, setimage] = useState(null);
  const [loading, setloading] = useState(false);

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === "image" ? image : video);
    data.append(
      "upload_preset",
      type === "image" ? "images_preset" : "videos_preset"
    );

    try {
      let cloudName = import.meta.env.VITE_CLOUDNARY_NAME;
      let resourceType = type === "image" ? "image" : "video";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);

      //upload image file
      const imgUrl = await uploadFile("image");

      //upload video file
      const videoUrl = await uploadFile("video");

      //send backend api request
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/videos`, {
        imgUrl,
        videoUrl,
      });
      // reset states
      setimage(null);
      setVideo(null);

      toast.success("file upload success");
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="video">Video Upload</label>
          <br />
          <input
            className="border border-gray-500 focus:outline-none"
            type="file"
            name=""
            accept="video/*"
            id="video"
            onChange={(e) => setVideo((prev) => e.target.files[0])}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="images">Image Upload</label>
          <br />
          <input
            className="border border-gray-500 focus:outline-none"
            type="file"
            name=""
            accept="image/*"
            id="images"
            onChange={(e) => setimage((prev) => e.target.files[0])}
          />
        </div>
        <button
          className="border border-gray-300 rounded shadow px-3 py-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadWidget;
