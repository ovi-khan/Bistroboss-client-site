import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Sheared/MenuItem/MenuItem";
import useMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mt-10">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-5 mb-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-10">
        <button className="btn btn-outline border-0 border-b-4 border-red-600 text-black font-bold  hover:bg-green-500 hover:text-white">
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
