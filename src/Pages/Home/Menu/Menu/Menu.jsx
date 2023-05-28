import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../../Sheared/Cover/Cover";
import coverImg from '../../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../../../hooks/UseMenu";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [ menu ] =  useMenu()

    const dessert = menu.filter( item => item.category === 'dessert' )
    const pizza = menu.filter( item => item.category === 'pizza' )
    const salad = menu.filter( item => item.category === 'salad' )
    const soup = menu.filter( item => item.category === 'soup' )
    const offered = menu.filter( item => item.category === 'offered' )
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        title="Our Menu"
      ></Cover>
      {/* main cover */}
      <SectionTitle heading="Don's Miss" subHeading="Todays Offer"></SectionTitle>
      {/* offerd menu items */}
      <MenuCategory items={offered} img={coverImg} ></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={dessert} title="Dessert" img={dessertImg}></MenuCategory>
      {/*  salad items */}
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
      {/*  soups items */}
      <MenuCategory items={soup} title="Salad" img={soupImg}></MenuCategory>
      {/*  pizza items */}
      <MenuCategory items={pizza} title="Salad" img={pizzaImg}></MenuCategory>

    </div>
  );
};

export default Menu;
