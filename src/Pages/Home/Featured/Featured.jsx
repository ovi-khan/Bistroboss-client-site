import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import img from './Featured.css'

const Featured = () => {
  return (
    <div className="mb-20 bgImg p-20 bg-fixed bg-slate-700 bg-opacity-95">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex gap-10 justify-center items-center py-8 px-16">
        <div>
          <img className="w-[648px] h-[400px]" src={featuredImg} alt="" />
        </div>
        <div className="space-y-5 w-[50%]">
          <h2 className="text-black">March 20, 2023</h2>
          <h1 className="text-2xl text-white font-semibold">WHERE CAN I GET SOME?</h1>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button
            className="btn btn-outline border-0 border-b-4 border-red-600 text-black font-bold  hover:bg-green-500 hover:text-white"
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
