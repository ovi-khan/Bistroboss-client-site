import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
            subHeading={'From 11:00am to 10:00pm'}
            heading={'Order Online'}
        >
            
        </SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img  className="absolute" src={slider1} alt="" />
            <h1 className="relative text-3xl mt-80 ms-24 text-black font-bold">Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider5} alt="" />
        </SwiperSlide>
      </Swiper>
      </section>
    </>
  );
};

export default Category;
