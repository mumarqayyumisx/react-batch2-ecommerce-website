import React from "react";
import { Sidebar } from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { selectShowCart } from "../redux/cartSlice";

const Layout = () => {
  const cartState = useSelector(selectShowCart);
  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <div className="flex mt-14 ">
          <Outlet />
          {cartState ? <Cart /> : null}
        </div>
      </div>
    </div>
  );
};

export default Layout;
