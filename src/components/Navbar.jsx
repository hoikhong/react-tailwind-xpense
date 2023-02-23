import React from "react";
import logo from "@/assets/img/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-[1100px] mx-auto my-14">
      <div className="logo flex items-center gap-2">
        <div className="flex items-center justify-center bg-[#FF7235] rounded-full p-6 w-[40px] h-[40px]">
          <p className=" text-white text-3xl font-bold ">x</p>
        </div>

        <p className="text-2xl">pense</p>
      </div>
      <div className="menu">
        <ul className="flex gap-6">
          <li>
            <a href="#">Features</a>v
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </div>
      <button className="border px-4 py-2 rounded-md text-[#FF7235] border-[#FF7235]">
        Request a demo
      </button>
    </nav>
  );
}

export default Navbar;
