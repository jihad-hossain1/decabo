import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import heroImg from "../../assets/hero/download1.jpg";
import heroImg2 from "../../assets/hero/download2.jpg";
import heroImg3 from "../../assets/hero/download.jpg";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import "./styles.css";

const HomepageCarosel = () => {
  return (
    <div className="mb-6">
      <div>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={1}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="">
            <div
              className="bg- w-full  bg-cover bg-inherit flex flex-col justify-start items-start min-h-[400px] shadow drop-shadow-sm"
              style={{ backgroundImage: `url(${heroImg})` }}
            >
              <div className="ml-20 mt-20 p-8 border bg-blue-gray-50/30 border-blue-gray-50/30 shadow-md rounded-sm">
                <h4 className="font-serif font-bold text-4xl text-blue-gray-900 mb-3">
                  Find the right fit
                </h4>
                <p className="text-sm  text-blue-gray-700">
                  The topics you want, taught by real-world experts. <br /> Log
                  in for deals on courses. Sale ends tomorrow.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className="bg- w-full  bg-cover bg-inherit flex flex-col justify-start items-start min-h-[400px] shadow drop-shadow-sm"
              style={{ backgroundImage: `url(${heroImg2})` }}
            >
              <div className="ml-20 mt-20 p-8 border bg-blue-gray-50/30 border-blue-gray-50/30 shadow-md rounded-sm">
                <h4 className="font-serif font-bold text-4xl text-blue-gray-900 mb-3">
                  Sale ends today
                </h4>
                <p className="text-sm  text-blue-gray-700">
                  Courses as low as $14.99. Learn the topics you want, <br />{" "}
                  taught by real-world experts.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className="bg- w-full  bg-cover bg-inherit flex flex-col justify-start items-start min-h-[400px] shadow drop-shadow-sm"
              style={{ backgroundImage: `url(${heroImg3})` }}
            >
              <div className="ml-20 mt-20 p-8 border bg-blue-gray-50/30 border-blue-gray-50/30 shadow-md rounded-sm">
                <h4 className="font-serif font-bold text-4xl text-blue-gray-900 mb-3">
                  Learn from anywhere
                </h4>
                <p className="text-sm  text-blue-gray-700">
                  On the couch, from the backyard, or on your commute. <br />{" "}
                  Our app lets you decide.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomepageCarosel;
