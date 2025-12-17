import React from "react";
import PrimaryButton from "./PrimaryButton";

const Navbar = ({ onOpenSidePanel, onOpenModal }) => {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 lg:px-20 py-5 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        MyCarBrand
      </h1>
      <div className="flex space-x-6 text-gray-700 font-medium">
        <a href="#features" className="hover:text-indigo-600 transition-colors">
          Features
        </a>
        <a href="#about" className="hover:text-indigo-600 transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-indigo-600 transition-colors">
          Contact
        </a>
      </div>
      <div className="flex gap-3 items-center">
        {onOpenSidePanel && (
          <button
            onClick={onOpenSidePanel}
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            ☰ Menu
          </button>
        )}
        {onOpenModal && (
          <button
            onClick={onOpenModal}
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            Car Modal
          </button>
        )}
        <PrimaryButton label="Get Started" onClick={() => alert("Get Started!")} />
      </div>
    </nav>
  );
};

export default Navbar;
