import React from "react";
import logo from "../../assets/logo2.svg";
import peace from "../../assets/peace.png";
import images from "../../assets/images.jpg";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  return (
    <div className="font-roboto ">
      <div className="flex justify-between px-[2rem] bg-zinc-950 text-white py-2 items-center fixed top-0 w-full">
        <div className="flex">
          <img src={logo} alt="" />
          <img src={peace} alt="" />
        </div>

        <div className="hover:bg-red">
          <ul className="flex gap-[2rem]">
            <span className="flex sm:gap-3 hover:text-[#ffcf01] items-center group cursor-pointer sm:flex-wrap">
              <li>About</li>
              <AiOutlineDown />
            </span>
            <span className="flex sm:gap-3  hover:text-[#363d42] items-center group cursor-pointer sm:flex-wrap">
              <li>Trading</li>
              <AiOutlineDown />
            </span>
            <span className="flex sm:gap-3  hover:text-[#363d42] items-center group cursor-pointer sm:flex-wrap">
              <li>Plateform</li>
              <AiOutlineDown className="	font-weight: 200;" />
            </span>
            <span className="flex sm:gap-3  hover:text-red-700 items-center group cursor-pointer sm:flex-wrap">
              <li>Tools</li>
              <AiOutlineDown />
            </span>
            <span className="flex sm:gap-3 items-center group cursor-pointer sm:flex-wrap">
              <li>Partners</li>
            </span>
            <li>Help</li>
          </ul>
        </div>
        <div className="flex  justify-between items-center gap-3 ">
          <button className="bg-blue-500 p-3">Register</button>
          <button>Sign Up</button>
          <img className="w-[2rem]" src={images} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
