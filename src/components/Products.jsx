import React from "react";
import blob from "@/assets/img/blob.png";
import product from "@/assets/img/product.png";

function Products() {
  return (
    <div className=" bg-primary ">
      <div className=" mx-auto relative flex justify-center">
        <img src={blob} alt="img" className="" />
        <img src={product} alt="" className="absolute bottom-0 " />
      </div>
    </div>
  );
}

export default Products;
