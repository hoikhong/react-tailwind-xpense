import React from "react";
import { overview } from "@/data.js";

function Brands() {
  const { brands } = overview;
  return (
    <section className="py-9 ">
      <div className="container mx-auto flex flex-col justify-between lg:flex-row items-center space-y-6">
        {/* brands */}
        {brands.map((item, index) => {
          const { image, delay } = item;
          return (
            <div key={index} data-aos="fade-up" data-aso-delay={delay}>
              {/* brand img */}
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Brands;
