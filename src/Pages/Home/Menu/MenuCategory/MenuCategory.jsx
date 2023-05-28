import React from "react";
import MenuItem from "../../../Sheared/MenuItem/MenuItem";
import Cover from "../../../Sheared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="">
        {title && <Cover
        img={img}
        title={title}
      ></Cover>}
      <div className="grid lg:grid-cols-2 gap-5 mt-20 mb-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-20">
      <button className="btn btn-outline border-0 border-b-4 border-red-600 text-black font-bold  hover:bg-green-500 hover:text-white">
          Offer Your fevorite food
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
