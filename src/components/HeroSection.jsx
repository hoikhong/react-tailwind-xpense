import React from "react";
import hero from "@/assets/img/hero.png";

function HeroSection() {
  return (
    <div className="container grid gap-2 grid-cols-2  max-w-[1100px] mx-auto mt-40 mb-56">
      <div className="hero-text">
        <div className="hero-title">
          <p className=" font-bold text-8xl">
            Track your Expenses to <br /> Save Money
          </p>
        </div>
        <div className="hero-description my-7">
          <p className="text-base text-[#BDBDBD]">
            {" "}
            Helps you to organize your income and expenses
          </p>
        </div>
        <div className="hero-button flex items-center gap-2">
          <button className="bg-[#FF7235] py-3 px-2 text-white rounded">
            Try free demo ..
          </button>
          <p className="text-[#BDBDBD]">- Web, Ios and Android</p>
        </div>
      </div>
      <div className="hero-image">
        <img className="" src={hero} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
