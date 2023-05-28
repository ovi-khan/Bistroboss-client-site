import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../../Sheared/Cover/Cover";
import coverImg from '../../../../assets/menu/banner3.jpg'
import PopularMenu from "../../PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        title="Our Menu"
      ></Cover>
      
    </div>
  );
};

export default Menu;
