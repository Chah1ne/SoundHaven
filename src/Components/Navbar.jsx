import React from "react";
import Cart from "../Components/Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <div className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            SoundHaven
            </span>
          </div>
        </Link>
        <div className="flex md:order-2">
          <Cart />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link to="/">
                <div
                  className="block py-2 pl-3 pr-4 md:hover:text-orange-700 text-white rounded md:bg-transparent md:p-0 "
                  aria-current="page"
                >
                  HOME
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="products/speakers" 
              >
                <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  SPEAKER
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="products/headphones" 
              >
                <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  HEADPHONES
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="products/earphones" 
              >
                <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  EARPHONES
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
