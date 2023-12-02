import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsQuote } from "react-icons/bs";
import { MdPlayCircle } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import { Link } from "react-router-dom";

const infos = [
  {
    title:
      "I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course",
    sortTitle: "SM",
    commenterName: "Surya M",
    title2: "[NEW] Ultimate AWS Certified Cloud Practitioner-2022",
    link: "/courses",
  },
  {
    title:
      "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager",
    sortTitle: "PW",
    title2: "Become a Product Manager | Learn the Skills & Get the Job",
    commenterName: "Phillip W",
    link: "/courses",
  },
  {
    title:
      "I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course",
    title2: "[NEW] Ultimate AWS Certified Cloud Practitioner-2022",
    sortTitle: "SM",
    commenterName: "Surya M",
    link: "/courses",
  },
  {
    title:
      "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager",
    sortTitle: "PW",
    title2: "Ultimate AWS Certified Cloud Practitioner-2023",
    commenterName: "Phillip W",
    link: "/courses",
  },
  {
    title:
      "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager",
    sortTitle: "PW",
    title2: "Become a Product Manager | Learn the Skills & Get the Job",
    commenterName: "Phillip W",
    link: "/courses",
  },
  {
    title:
      "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager",
    sortTitle: "PW",
    title2: "Become a Product Manager | Learn the Skills & Get the Job",
    commenterName: "Phillip W",
    link: "/courses",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-blue-gray-50/60 py-16">
      <div className="max-w-7xl mx-auto">
        <div>
          <h4 className="text-2xl font-bold ml-4 mb-7">
            How learners like you are achieving their goals
          </h4>
        </div>
        <div>
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper"
          >
            {infos?.map((item, index) => (
              <SwiperSlide
                className="ml-4 border bg-white border-gray-400  p-7 flex flex-col justify-between"
                key={index}
              >
                <div className="">
                  <BsQuote className="mb-3 text-3xl " />
                  <h4 className="break-all text-blue-gray-800 mb-3">
                    {item?.title}
                  </h4>
                </div>
                <div className="flex flex-col ju mt-10">
                  <div className="">
                    <div className="flex items-center space-x-3 my-5">
                      <div className="bg-gray-900 p-[6px] rounded-full text-white inline-block ">
                        {item?.sortTitle}
                      </div>
                      <h4 className="font-bold ">{item?.sortTitle}</h4>
                    </div>
                    <div className="border border-blue-gray-100"></div>
                    <Link to={"/courses"}>
                      <div className="flex space-x-2 items-center mt-3">
                        <MdPlayCircle className="text-teal-700 text-3xl" />
                        <h4 className=" font-semibold text-teal-700">
                          {item?.title2}
                        </h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
