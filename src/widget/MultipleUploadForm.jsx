// import { image } from "@cloudinary/url-gen/qualifiers/source";
import React, { useEffect, useRef, useState } from "react";
import { uploadMultiple } from "./UploadMultiple";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import copy from "copy-to-clipboard";

const MultipleUploadForm = () => {
  const textRef = useRef();
  const [multiImage, setMultiImage] = useState([]);
  const [multiLink, setmultiLink] = useState([]);
  const [loading, setloading] = useState(false);

  const [toggleSeeGallary, settoggleSeeGallary] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setloading(true);
      let arr = [];
      for (let i = 0; i < multiImage.length; i++) {
        const data = await uploadMultiple(multiImage[i]);
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
  // console.log(multiImage);

  useEffect(() => {
    if (multiImage) {
      console.log(multiImage);
    }
  }, []);

  const copyToClipboard = () => {
    let copyText = textRef.current.value;
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };
  return (
    <div className="mt-4">
      <Toaster />
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image">Multiple Image Uplaod</label>
          <br />
          <input
            required
            className="border border-gray-400"
            type="file"
            name=""
            accept="image/*"
            id="image"
            multiple={true}
            onChange={(e) => setMultiImage(e.target.files)}
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
        <>
          {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
          <div className="flex flex-col gap-1 my-4" ref={textRef}>
            {multiLink?.map((item, i) => (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => copyToClipboard()}
                  className="text-sm text-green-500 border px-2 rounded "
                >
                  copy link{" "}
                </button>
                <input
                  disabled
                  key={i}
                  ref={textRef}
                  className=""
                  defaultValue={item?.url}
                />
              </div>
            ))}
          </div>
          {multiLink?.map((item) => (
            <div
              key={item?.url}
              className="border rounded border-r-blue-gray-300"
            >
              <img
                src={item?.url}
                className="max-w-[300px] object-cover"
                alt=""
              />
            </div>
          ))}
        </>
      )}

      {toggleSeeGallary?.length == 0 && (
        <h4 className="text-blue-gray-900 mt-5">please upload some item</h4>
      )}
    </div>
  );
};

export default MultipleUploadForm;

// <div className="grid md:grid-cols-2 ">
//     {multiLink?.map((item) => {
//         return (
//             <div className="border rounded border-r-blue-gray-300">
//                 <img
//                     src={item?.url}
//                     className="max-w-[300px] object-cover"
//                     alt=""
//                 />
//             </div>
//     )
//        </div>
