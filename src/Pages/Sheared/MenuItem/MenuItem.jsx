import React from 'react';

const MenuItem = ({item}) => {
    const { name, recipe, image, category, price } = item
    return (
        <div className='flex gap-5 space-x-2 mb-5'>
            <img className='w-24 h-24 object-cover' style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />
            <div>
            <h2 className='text-2xl text-black font-semibold'>{name}-----------</h2>
            <p>{recipe}</p>
            </div>
            <p className='text-yellow-500 font-bold'>${price}</p>
        </div>
    );
};

export default MenuItem;