import React from "react";
// import data
import { features } from "@/data.js";

function Feature2() {
  // destructure
  const { feature2 } = features;
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return (
    <section className="section ">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:items-center lg:gap-x-[30px]">
          {/* image */}
          <div className="flex-1" data-aos="fade-right" data-aos-offset="500">
            <img src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1" data-aos="fade-right" data-aos-offset="100">
            <div className="pretitle">{pretitle}</div>
            <h2 className="title">{title}</h2>
            <p className="lead">{subtitle}</p>
            <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <img src={btnIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature2;
