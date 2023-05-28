import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Sheared/MenuItem/MenuItem';
import useMenu from '../../../hooks/UseMenu';

const PopularMenu = () => {
    const [ menu ] = useMenu()
    const popular = menu.filter( item => item.category === 'popular' )

    // useEffect( () => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // } ,[])

    return (
        <section className='mt-10'>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            >

            </SectionTitle>
                <div className='grid lg:grid-cols-2 gap-5 mb-10'>
                {
                    popular.map(item =>  <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
                </div>
        </section>
    );
};

export default PopularMenu;