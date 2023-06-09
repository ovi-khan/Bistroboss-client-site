import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/UseCart";

const DashBoard = () => {
  const [cart] = useCart()
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full  text-base-content text-white">
          <li>
            <NavLink to='/dashboard/home'>
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/reservation'>
              <FaCalendarAlt></FaCalendarAlt>Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/paymenthistory'>
              <FaWallet></FaWallet>Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/mycart'>
              <FaShoppingCart></FaShoppingCart>My Cart
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
