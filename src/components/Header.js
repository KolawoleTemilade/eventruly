import React from "react";
import notocrown from "../assets/images/notocrown.jpg";

const Header = () => {

  return (
    <div
      className=" fixed max-w-[1360px] w-full z-50 bg-secondary  top-0 "
    >
      <div className="flex justify-between items-center gap-10  mx-20 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={notocrown} alt="Logo" className="h-10" />
          <h2 className="font-sans text-[30px] capitalize text-black">eventruly</h2>
        </div>

        {/* Navigation */}
        <nav className="w-auto">
          <ul className="flex font-garamond capitalize space-x-8 px-6 py-2 bg-white border border-gray-300 rounded-full">
            <li className="cursor-pointer hover:text-secondary transition">about us</li>
            <li className="cursor-pointer hover:text-secondary transition">events</li>
            <li className="cursor-pointer hover:text-secondary transition">portfolio</li>
            <li className="cursor-pointer hover:text-secondary transition">contact us</li>
          </ul>
        </nav>

        {/* Country Selector */}
        <div className="border border-gray-300 rounded-md px-4 py-2 bg-white text-black">
          <p className="capitalize">nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
