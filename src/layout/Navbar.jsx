import { Bell, Menu, Search, ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNoOfCartProducts, toggleCart } from "../redux/cartSlice";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const dispatch = useDispatch();
  const noOfAddedProducts = useSelector(selectNoOfCartProducts);

  const handleCartToggle = () => {
    dispatch(toggleCart());
  };
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50 ml-14 h-14">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <div className="flex">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="relative p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
            >
              <Menu className="w-6 h-6" />

              <span className="sr-only">Toggle sidebar</span>
            </button>
            <Badge className="absolute right-24">{noOfAddedProducts}</Badge>
          </div>

          <svg
            className="mr-3 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Products Dasboard
          </span>
          <form action="#" method="GET" className="hidden md:block md:pl-2">
            <label htmlFor="topbar-search" className="sr-only">
              Search
            </label>
            <div className="relative md:w-64">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center lg:order-2">
          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"
            onClick={handleCartToggle}
          >
            <span className="sr-only">View Cart</span>
            <ShoppingCart className="w-6 h-6" />
          </button>

          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="w-6 h-6" />
          </button>
          <button
            type="button"
            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/placeholder.svg?height=32&width=32"
              alt="user photo"
            />
          </button>
          <div
            className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
            id="dropdown"
          >
            <div className="py-3 px-4">
              <span className="block text-sm font-semibold text-gray-900">
                Neil Sims
              </span>
              <span className="block text-sm text-gray-900 truncate">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-1 text-gray-700" aria-labelledby="dropdown">
              <li className="block py-2 px-4 text-sm hover:bg-gray-100">
                My profile
              </li>
              <li className="block py-2 px-4 text-sm hover:bg-gray-100">
                Account settings
              </li>
            </ul>
            <ul className="py-1 text-gray-700" aria-labelledby="dropdown">
              <li className="block py-2 px-4 text-sm hover:bg-gray-100">
                Sign out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
