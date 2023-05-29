import React from "react";

const FoodCard = ({item}) => {
    const { name, recipe, image, category, price } = item
  return (
    <div className="card w-80 bg-blue-400 bg-base-100 shadow-xl">
      <figure>
        <img
        className=""
          src={image}
        />
        <p className="bg-slate-700 text-red-600 absolute right-0 -mt-28 mr-14 rounded px-2">${price}</p>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Food Name: {name}</h2>
        <p>Category: {recipe}</p>
        <div className="card-actions  justify-center">
          <button className="btn btn-outline border-0 border-b-4 border-red-600 text-black font-bold  hover:bg-green-500 hover:text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
