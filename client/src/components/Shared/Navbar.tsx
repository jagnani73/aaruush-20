import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/Shared/aaruushLogo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:px-16 px-6 bg-gray-900 flex flex-wrap items-center lg:py-0 py-2 fixed w-full">
      <div className="flex-1 flex justify-between items-center">
        <NavLink to="/" exact>
          <div className="w-16">
            <img src={logo} alt="A'20" width="100%" />
          </div>
        </NavLink>
      </div>

      <label
        htmlFor="menu-toggle"
        className="cursor-pointer block lg:hidden"
        onClick={open}
      >
        <div id="close-icon" className={`${isOpen && "open"}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <input className="hidden" type="checkbox" />
      <div
        className={`${
          !isOpen && "hidden"
        } lg:flex lg:items-center lg:w-auto w-full`}
      >
        <nav>
          <ul className="flex flex-wrap w-full text-base text-white text-center pt-4 lg:pt-0">
            <li className="w-full lg:w-auto" onClick={open}>
              <NavLink
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                exact
                to="#"
              >
                Features
              </NavLink>
            </li>
            <li className="w-full lg:w-auto" onClick={open}>
              <NavLink
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                exact
                to="#"
              >
                Pricing
              </NavLink>
            </li>
            <li className="w-full lg:w-auto" onClick={open}>
              <NavLink
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                exact
                to="#"
              >
                Documentation
              </NavLink>
            </li>
            <li className="w-full lg:w-auto" onClick={open}>
              <NavLink
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                exact
                to="#"
              >
                Support
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
